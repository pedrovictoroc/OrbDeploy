import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Star } from './../../../../Icons'

import './Comprometimento.css'

function Comprometimento() {
    const usuario = useSelector(state => state.Aventureiro.userSelecionado);


    return (
        <div className="background">

            <div className="responsive animation">

                <header className="cabecalho">
                    <span>aventureiros&nbsp;&nbsp; > &nbsp;&nbsp;{usuario.usuario} &nbsp;&nbsp; > &nbsp;&nbsp; comprometimento</span>
                    <span>
                        <Link to="/aventureiros/detalhe-aventureiro">voltar</Link>
                    </span>
                </header>

                <div className="nvl-comprometimento">
                    <Star fill="#33CCFF" />
                    <span>nível {usuario.comprometimento} - janeiro</span>
                </div>

                <div className="titulo-com-linha" style={{ width: '100%' }}>
                    <h1 style={{ minWidth: '180px' }}>atividades realizadas</h1>
                    <div className="linha"></div>
                </div>

                <div className="atividades-usuario">
                    <div className="atividade">
                        <span>tarefa tal</span>
                        <span>por
                        <span style={{ color: '#195170' }}> fulano</span>
                        </span>
                        <span>em setor tal</span>
                        <span style={{ textAlign: 'center' }}>
                            deadline: 08/01 <br />
                            conclusão: <span style={{ color: '#6dc04b' }}>06/01</span>
                        </span>
                    </div>


                </div>

                <div className="titulo-com-linha" style={{ width: '100%' }}>
                    <h1 style={{ minWidth: '180px' }}>atividades propostas</h1>
                    <div className="linha"></div>
                </div>

                <div className="atividades-usuario">

                    <div className="atividade">
                        <div className="dados-atividade" >
                            <img src={usuario.avatar} alt="avatar" width="73px" height="73px" />
                            <div>
                                <p>{usuario.nome}</p>
                                <p style={{ fontSize: '1.2rem' }}>{usuario.setor}</p>
                            </div>
                        </div>
                        <span>tarefa tal</span>
                        <span>em setor tal</span>
                        <span style={{ textAlign: 'center' }}>
                            deadline: 08/01 <br />
                            conclusão: 06/01
                        </span>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Comprometimento
