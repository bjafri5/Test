import React from 'react';
import './App.css';

export default class FormContainer extends React.Component {
    render() {
        return (
            <div className="container form-container">
                <div className="col-sm-10 signup-form gradient">
                    <h2 className="font-weight-bold centered-text">{this.props.heading}</h2>
                    <br />
                    {this.props.children}
                </div>
            </div>
        );
    }
}