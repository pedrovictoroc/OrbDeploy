import React from 'react'
import { Link } from "react-router-dom";

import { Search } from '../../Icons';

import './BtnDetalhes.css'

function BtnDetalhes({ funcbtn, isLink, toLink }) {
    if (isLink) {
        return (
            <Link className="btn-detalhes" onClick={funcbtn} to={toLink}>
                <span>detalhes</span>
                <Search fill="#195170" />
            </Link>
        )
    }
    else {
        return (
            <div className="btn-detalhes" onClick={funcbtn}>
                <span>detalhes</span>
                <Search fill="#195170" />
            </div>
        )
    }

}

export default BtnDetalhes

