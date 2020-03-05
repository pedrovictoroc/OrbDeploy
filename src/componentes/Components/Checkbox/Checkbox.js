import React, { Component } from 'react'

import './Checkbox.css'

export class Checkbox extends Component {
    render() {
        return (
            <div className="check" style={{margin: this.props.margin}}>
                <span className="checkmark" id={"checkmark " + this.props.id} onClick={() => this.props.FuncCheckbox(this.props.id)}></span>
                <span className="checkmarklabel" onClick={() => this.props.FuncCheckbox(this.props.id)}>{this.props.name}</span>
            </div>
        )
    }
}

export default Checkbox
