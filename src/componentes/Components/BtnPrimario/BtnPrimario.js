import React, { Component } from 'react'
import { Link } from "react-router-dom";

import './BtnPrimario.css'

export class BtnPrimario extends Component {
    render() {
        return (
            <div className="btnprimario">
                {
                    this.props.isLink ? <Link to={this.props.link} style={{ width: this.props.width }}>{this.props.texto}</Link> :
                        <button onClick={this.props.handleClick} id={this.props.id} 
                        style={{ width: this.props.width, backgroundColor: this.props.backColor, color: this.props.textColor }}
                        >{this.props.texto}
                        </button>
                }
            </div>
        )
    }
}

export default BtnPrimario
