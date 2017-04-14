import React, { Component } from 'react';
import FormContainer from './FormContainer';
import InputComponent from './InputComponent';
import './App.css';

export default class AddUserForm extends Component {
    render() {
        return (
            <div className="container">
                <FormContainer heading="Add User" >
                    <InputComponent label="Name" />
                    <InputComponent label="Email" />
                    <InputComponent label="Role" />
                    <InputComponent label="Salary" type="number" />

                    <button type="button" className="btn btn-lg btn-primary center-block">Save</button>
                </FormContainer>
            </div>
        );
    }
}
