import React, { Component } from 'react'
import './Input.css'

class Imput extends Component {
    render() {
        return (
            <div className="block-input">
                <label>{this.props.label}</label>
                <input onChange={this.props.attcampo} className={this.props.name} name={this.props.name} type={this.props.type}></input>
            </div>
        )
    }
}

export default Imput;
