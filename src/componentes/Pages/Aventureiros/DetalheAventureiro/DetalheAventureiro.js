import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import './DetalheAventureiro.css'

import Tooltip from '../../../Components/Tooltip/Tooltip'
import BtnPrimario from '../../../Components/BtnPrimario/BtnPrimario'

import { Star, Eye, Fire, Medal, Trophy, Search, Anexo } from './../../../Icons'

function DetalheAventureiro() {
    const usuario = useSelector(state => state.Aventureiro.userSelecionado);

    //renderizando icones de comprometimento
    let compr = [];

    for (let index = 0; index < usuario.comprometimento; index++) {
        compr.push(
            <Star key={index} fill="#33CCFF" />
        )
    }

    for (let index = usuario.comprometimento; index < 5; index++) {
        compr.push(
            <Star key={index} fill="#d3d3d3" />
        )
    }

    // renderizando icones de participação
    let part = [];

    for (let index = 0; index < usuario.participacao; index++) {
        part.push(
            <Eye key={index} fill="#33CCFF" />
        )
    }

    for (let index = usuario.participacao; index < 5; index++) {
        part.push(
            <Eye key={index} fill="#d3d3d3" />
        )
    }

    // renderizando icones de disponibilidade
    let disp = [];

    for (let index = 0; index < usuario.disponibilidade; index++) {
        disp.push(
            <Fire key={index} fill="#33CCFF" />
        )
    }

    for (let index = usuario.disponibilidade; index < 5; index++) {
        disp.push(
            <Fire key={index} fill="#d3d3d3" />
        )
    }

    // calculo do lvl e xp

    let lvls = [
        20, 40, 60, 100, 200, 500, 700, 900, 1100, 1400, 1700, 2000, 2300, 2600, 2900, 3100, 3400, 3700, 4000, 4400, 4800, 5200, 5600, 6000, 6400, 6800, 7200, 7600, 8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500, 12000, 12500, 13000, 13600, 14200, 14800, 15400, 16000, 16600, 17200, 17800, 18400, 19000, 20000
    ];

    let somalvls = 0;
    let i = 0;
    while (usuario.XP >= somalvls) {
        somalvls += lvls[i];
        i++;
    }

    let level = i - 1;
    let XPtotallevelatual = lvls[level];
    let XPlevelfaltando = somalvls - usuario.XP;
    let XPlevelatual = XPtotallevelatual - XPlevelfaltando;

    let pixels = (XPlevelatual * 185) / XPtotallevelatual;

    return (
        <div className="background">

            <div className="responsive animation">

                <header className="cabecalho">
                    <span>aventureiros&nbsp;&nbsp; > &nbsp;&nbsp;{usuario.usuario}</span>
                    <span>
                        <Link to="/aventureiros">voltar</Link>
                    </span>
                </header>
                <div className="detalhe-aventureiro flex wrap justify-center">
                    <div className="info-usuario">
                        <div className="dados-usuario">
                            <div className="apelido-usuario">
                                <p> <b> {usuario.usuario} </b> </p>
                            </div>
                            <div className="nome-usuario">
                                {usuario.nome}
                            </div>
                            <p>{usuario.cargo} de {usuario.setor}</p>
                        </div>
                        <img src={usuario.avatar} alt="imagem de perfil" width="225px" height="225px" />
                        <p>{usuario.mensagem}</p>

                        <div id="efeitoTooltip" >
                            <Tooltip texto={XPlevelatual + "/" + XPtotallevelatual} IDdiv="efeitoTooltip" IDtooltip="TooltipBarraLvl" />
                            {/* barra de xp */}

                            <div className="level" ></div>

                            {/* exibe o a barra de xp do lvl atual */}
                            <div className="LVLlabel" style={{ width: pixels + "px" }}></div>

                            <div className="barrinhabrancanolvl"></div>

                        </div>

                        {/* exibindo o lvl atual */}

                        <p id="efeitoTooltipLvl" style={{ color: "#6dc04b" }}>lv {level}</p>
                        <Tooltip texto={"Xp total: " + usuario.XP} IDdiv="efeitoTooltipLvl" IDtooltip="TooltipLvl" />

                    </div>
                    <div className="flex-stats-botoes">
                        <div className="stats-usuario">
                            <div className="info-stats">
                                <p style={{ marginRight: 74 }}>medalhas:</p>
                                <div className="icones-info-stats medalhas">
                                    <Medal fill="#146f75" />
                                    <Medal fill="#146f75" />
                                    <Medal fill="#146f75" />
                                    <Medal fill="#146f75" />
                                    <Medal fill="#146f75" />
                                    <Medal fill="#146f75" />
                                </div>
                            </div>
                            <div className="info-stats">
                                <p style={{ marginRight: 70 }}>conquistas:</p>
                                <div className="icones-info-stats conquistas" style={{ marginRight: 60 }}>
                                    <Trophy fill="#a9aa7d" />
                                    <Trophy fill="#a9aa7d" />
                                    <Trophy fill="#a9aa7d" />
                                    <Trophy fill="#a9aa7d" />
                                    <Trophy fill="#a9aa7d" />
                                </div>
                            </div>
                            <div className="info-stats">
                                <p>comprometimento:</p>
                                <div className="flex">
                                    <div className="icones-info-stats">
                                        {
                                            compr.map((star) => star)
                                        }
                                    </div>
                                    <Link to="/aventureiros/detalhe-aventureiro/comprometimento">
                                        <Search style={{ margin: "10px 15px 0px 15px", cursor: 'pointer', width: 25, height: 25 }} fill="#195170" />
                                    </Link>

                                </div>

                            </div>
                            <div className="info-stats">
                                <p>participação:</p>
                                <div className="flex">
                                    <div className="icones-info-stats">
                                        {
                                            part.map((eye) => eye)
                                        }
                                    </div>
                                    <Link to="/aventureiros/detalhe-aventureiro/participacao">
                                        <Search style={{ margin: "10px 15px 0px 15px", cursor: 'pointer', width: 25, height: 25 }} fill="#195170" />
                                    </Link>
                                </div>

                            </div>
                            <div className="info-stats">
                                <p>disponibilidade:</p>
                                <div className="flex">
                                    <div className="icones-info-stats">
                                        {
                                            disp.map((fire) => fire)
                                        }
                                    </div>
                                    <div id="efeitoTooltipAnexo">
                                        <Anexo fill="#33CCFF" />
                                    </div>
                                    <Tooltip texto={usuario.descDisponi} IDdiv="efeitoTooltipAnexo" IDtooltip="TooltipAnexo" posicao="esquerda" />

                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: 100 }}>
                            <BtnPrimario texto="estatísticas" width="270px" isLink={true} link="/aventureiros/detalhe-aventureiro/estatisticas"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetalheAventureiro
