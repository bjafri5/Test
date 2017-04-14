import React from 'react';
import './App.css';
//import {connect} from 'react-redux';
//import {changeScreen, UPDATE_USER, ADD_USER} from './Actions';

export default class VerticalNavbar extends React.Component {

    componentWillMount() {
        console.log('mounted');
        this.state = {
            currentScreen: this.ADD_USER
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
                                <span className="visible-xs navbar-brand">Sidebar menu</span>
                            </div>
                            <div className="navbar-collapse collapse sidebar-navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li className={this.isActive(this.ADD_USER)}>
                                        <a onClick={this.changeScreen.bind(this, this.ADD_USER)} href="#">Add Users</a>
                                    </li>
                                    <li className={this.isActive(this.UPDATE_USER)}>
                                        <a onClick={this.changeScreen.bind(this, this.UPDATE_USER)} href="#">Update Users</a>
                                    </li>
                                    <li><a href="#">Menu Item 3</a></li>
                                    <li><a href="#">Menu Item 4</a></li>
                                    <li><a href="#">Reviews <span className="badge">1,118</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-9">
                    {this.props.children}
                </div>
            </div>
        );
    }
}


// export default connect((state) => {
//     console.log(state);
//     return {
//         currentScreen: state.currentScreen 
//     }
// }, (dispatch) => {
//     return {
//         changeScreen: (screen) => {
//             return dispatch(changeScreen(screen));
//         }
//     }
// })(VerticalNavbar);