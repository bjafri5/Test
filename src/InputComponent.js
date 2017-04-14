import React from 'react';

export default class InputComponent extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="form-group">
                        <label>{this.props.label}</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
            </div>
        );
    }
}