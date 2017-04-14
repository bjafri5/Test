import React from 'react';
import './App.css';
import AddUserFrom from './AddUserForm.jsx';
import UpdateUserForm from './UpdateUserForm.jsx';

export default class App extends React.Component {

  componentWillMount() {
    console.log('mounted');
    this.state = {
      currentScreen: this.ADD_USER
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

  ADD_USER = 'ADD_USER';
  UPDATE_USER = 'UPDATE_USER';

  changeScreen(screen) {
    this.setState({
      currentScreen: screen
    });
  }

  render() {
    return (
      <div className="row container">
        <div className="col-sm-3">
          <div className="sidebar-nav">
            <div className="navbar navbar-inverse gradient" role="navigation">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <span className="visible-xs navbar-brand">Select View</span>
              </div>
              <div className="navbar-collapse collapse sidebar-navbar-collapse">
                <ul className="nav navbar-nav">
                  <li className={this.isActive(this.ADD_USER)}>
                    <a onClick={this.changeScreen.bind(this, this.ADD_USER)}>Add Users</a>
                  </li>
                  <li className={this.isActive(this.UPDATE_USER)}>
                    <a onClick={this.changeScreen.bind(this, this.UPDATE_USER)}>Update Users</a>
                  </li>
                  <li>
                    <a>View Users <span className="badge">1,118</span></a>
                  </li>
                  <li>
                    <a>Delete Users</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-9">
          {this.selectScreen()}
        </div>
      </div>
    );
  }
}