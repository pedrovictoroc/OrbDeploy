import React from 'react'
import { Link } from "react-router-dom";

import { Medal, Star, Eye, Fire, } from './../../Icons'

import BtnDetalhes from './../../Components/BtnDetalhes/BtnDetalhes'

import './Aventureiro.css'

function Aventureiro({ rank, level, usuario, btn, funcbtn, isLink, toLink , pagina }) {

    // cores da participação e disponibilidade
    let colorPart = usuario.participacao < 2 ? "#d3d3d3" : usuario.participacao < 5 ? "#33CCFF" : "#195170";

    let colorDisp = usuario.disponibilidade < 2 ? "#d3d3d3" : usuario.disponibilidade < 5 ? "#33CCFF" : "#195170";


    return (
        <div className="aventureiro">
            <span style={{ width: '35px' }}>#{rank}</span>
            <div className="info-aventureiro flex">
                <img src={usuario.avatar} alt="avatar" width="73px" height="73px" />
                <div>
                    <span>{usuario.nome}</span>
                    <p style={{ fontSize: '1.2rem', margin: '0' }}>{usuario.cargo}</p>
                </div>
            </div>

            {
                pagina === "mural" ?
                    <span style={{ color: "#6dc04b", width: '130px' }}>+{usuario.XP} pontos</span> :
                    <>
                        <span style={{ color: "#6dc04b", width: '40px' }}>lv {level}</span>

                        <div className="flex">
                            <Medal fill="#daa520" />
                            <Medal fill="#daa520" />
                            <Medal fill="#daa520" />
                        </div>
                    </>
            }

            <div className="flex align-center">
                <Star fill="#33CCFF" />
                <span style={{ color: "#33CCFF", width: '12px' }}>{usuario.comprometimento}</span>

                <Eye fill={colorPart} />
                <span style={{ color: colorPart, width: '12px' }}>{usuario.participacao}</span>

                <Fire fill={colorDisp} />
                <span style={{ color: colorDisp, width: '12px' }}>{usuario.disponibilidade}</span>
            </div>

            {
                btn === "configurar" ? <Link to="/admin/gerenciar-membros/configurar">configurar</Link> : <BtnDetalhes funcbtn={funcbtn} isLink={isLink} toLink={toLink}/>
            }

        </div>
    )
}

export default Aventureiro