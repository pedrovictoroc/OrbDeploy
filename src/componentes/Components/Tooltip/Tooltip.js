import React, { Component } from 'react'

import './Tooltip.css'

import FuncaoTooltip from './FuncaoTooltip'

export class Tooltip extends Component {

    componentDidMount(){
        FuncaoTooltip(this.props.IDdiv, this.props.IDtooltip, this.props.posicao);
    }

    render() {
        
        return (
            <div className="tooltip" id={this.props.IDtooltip}>
                {this.props.texto}
            </div>
        )
    }
}

export default Tooltip
