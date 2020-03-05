import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Eye } from './../../../../Icons'

import './Participacao.css'

function Participacao() {
    const usuario = useSelector(state => state.Aventureiro.userSelecionado);

    return (
        <div className="background">
            <div className="responsive animation">

                <header className="cabecalho">
                    <span>aventureiros&nbsp;&nbsp; > &nbsp;&nbsp;{usuario.usuario} &nbsp;&nbsp; > &nbsp;&nbsp; participação</span>
                    <span>
                        <Link to="/aventureiros/detalhe-aventureiro">voltar</Link>
                    </span>
                </header>
                
                <div className="nvl-participacao">
                    <Eye fill="#d3d3d3" />
                    <span>nível {usuario.participacao} - janeiro</span>
                </div>

                <div className="titulo-com-linha" style={{ width: '100%' }}>
                    <h1 style={{ minWidth: '75px' }}>eventos</h1>
                    <div className="linha"></div>
                </div>

                <div className="eventos-participacao">
                    <div className="evento">
                        <span>evento tal</span>
                        <span>data: 08/01</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Participacao
