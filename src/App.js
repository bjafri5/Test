import React from 'react';
import './App.css';
import AddUserFrom from './AddUserForm.jsx';
import UpdateUserForm from './UpdateUserForm.jsx';

export default class App extends React.Component {

  ADD_USER = 'ADD_USER';
  UPDATE_USER = 'UPDATE_USER';

  componentWillMount() {
    this.state = {
      currentScreen: this.ADD_USER,
      collapsed: false
    }
  }

  selectScreen() {
    switch (this.state.currentScreen) {
      case this.ADD_USER:
        return (<AddUserFrom />);
      case this.UPDATE_USER:
        return (<UpdateUserForm />);
      default:
        return (<AddUserFrom />);
    }
  }

  isActive(screen) {
    return this.state.currentScreen === screen ? "active" : null;
  }

  collapseSideBar(collapse) {
    this.setState({
      currentScreen: this.state.currentScreen,
      collapsed: collapse
    })
  }

  changeScreen(screen) {
    this.setState({
      currentScreen: screen,
      collapsed: this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <nav className={this.state.collapsed ? "collapsed navbar-primary gradient" : "navbar-primary gradient"}>
          <a onClick={this.collapseSideBar.bind(this, !this.state.collapsed)} className="btn-expand-collapse">
            <span className={this.state.collapsed ? "glyphicon glyphicon-menu-right" : "glyphicon glyphicon-menu-left"}></span>
          </a>
          <ul className="navbar-primary-menu">
            <li className={this.isActive(this.ADD_USER)}>
              <a onClick={this.changeScreen.bind(this, this.ADD_USER)}>
                <span className="glyphicon glyphicon-user"></span>
                <span className="glyphicon glyphicon-plus"></span>
                <span className="nav-label">     Add User</span>
              </a>
            </li>

            <li className={this.isActive(this.UPDATE_USER)}>
              <a onClick={this.changeScreen.bind(this, this.UPDATE_USER)}>
                <span className="glyphicon glyphicon-user"></span>
                <span className="glyphicon glyphicon-refresh"></span>
                <span className="nav-label">     Update User</span>
              </a>
            </li>

            <li>
              <a>
                <span className="glyphicon glyphicon-user"></span>
                <span className="glyphicon glyphicon-eye-open"></span>
                <span className="nav-label">     View Users</span>
              </a>
            </li>

            <li>
              <a>
                <span className="glyphicon glyphicon-user"></span>
                <span className="glyphicon glyphicon-remove"></span>
                <span className="nav-label">     Delete User</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="main-content">
          {this.selectScreen()}
        </div>
      </div>
    );
  }
}