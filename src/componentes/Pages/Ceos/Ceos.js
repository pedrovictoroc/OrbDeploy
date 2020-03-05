import React, { useState } from 'react'
import { HorizontalBar, defaults } from 'react-chartjs-2';

import logoCeos from './../../Images/ceos_logo.png'

import BtnPrimario from '../../Components/BtnPrimario/BtnPrimario'
import Modal from '../../Components/Modal/Modal'

import './Ceos.css'

import { Support, Helmet, Sword, Compass, Dragon, Lens, Shield, Star, Eye, Fire, Medal } from './../../Icons'

import { ceos, metas, tecnologias, porc_tecnologias } from './../../../servidor/Dados'

function Ceos() {
    const [ceosData] = useState(ceos);
    const [ceosMetas] = useState(metas);
    const [tecnologiasData] = useState(tecnologias);
    const [porc_tecnologiasData] = useState(porc_tecnologias);

    const [idTecnologiaGrafico, setIdTecnologiaGrafico] = useState();

    const [showModal, setShowModal] = useState(false); // state que mostra o modal

    //definindo a cor dos icones de participacao e disponibilidade
    let colorPart = ceosData.participacao < 2 ? "#d3d3d3" : ceosData.participacao < 5 ? "#33CCFF" : "#195170";

    let colorDisp = ceosData.disponibilidade < 2 ? "#d3d3d3" : ceosData.disponibilidade < 5 ? "#33CCFF" : "#195170";

    //calculando a melhor tecnologia em platina, diamante e ouro
    let maiorPlatina = porc_tecnologiasData.reduce((maiorPorc, atual) => {
        if (atual.porc_platina > maiorPorc.porc_platina) {
            maiorPorc = atual;
        }
        return maiorPorc;
    })

    let maiorDiamante = porc_tecnologiasData.reduce((maiorPorc, atual) => {
        if (atual.porc_diamante > maiorPorc.porc_diamante) {
            maiorPorc = atual;
        }
        return maiorPorc;
    })

    let maiorOuro = porc_tecnologiasData.reduce((maiorPorc, atual) => {
        if (atual.porc_ouro > maiorPorc.porc_ouro) {
            maiorPorc = atual;
        }
        return maiorPorc;
    })


    // grafico das tecnologias

    // pegando as porcentagens da tecnologia no state 'idTecnologiaGrafico'
    let porcTec = porc_tecnologiasData.find((tec) => {
        if (tec.id === idTecnologiaGrafico) {
            return tec;
        }
        return ''
    });

    let arrayPorc;
    if (porcTec) {
        arrayPorc = [porcTec.porc_na, porcTec.porc_bronze, porcTec.porc_prata, porcTec.porc_ouro, porcTec.porc_diamante, porcTec.porc_platina];
    }

    defaults.global.defaultFontFamily = 'Teko-Light';
    defaults.global.defaultFontSize = 20;
    const data = {
        labels: ['n/a', 'bronze', 'prata', 'ouro', 'diamante', 'platina'],
        datasets: [
            {
                data: arrayPorc,
                backgroundColor: [
                    'white',
                    '#DB9370',
                    '#c0c0c0',
                    'rgb(255, 215, 0)',
                    '#87CEEB',
                    '#195170'
                ],
            }
        ]
    };

    // pegando as informações da tecnologia de id selecionado
    let tec_selecionada = tecnologiasData.find((tec) => {
        if (tec.id === idTecnologiaGrafico) {
            return tec;
        }
        return ''
    });

    //função que seta o state 'idTecnologiaGrafico' para o id da tec que foi clicada e assim mostrando as porc no grafico
    function clickBtnTec(idTec) {
        //setando o id da tec selecionada
        setIdTecnologiaGrafico(idTec);

        //abrindo o modal
        attShowModal();
    }

    //mostra o modal
    function attShowModal() {
        setShowModal(!showModal);
    }



    return (
        <div className="background">
            <div className="ceos responsive animation">
                <section className="flex wrap align-center justify-center">
                    <div style={{ margin: 40 }}>
                        <img src={logoCeos} width="200px" height="200px" alt="logo ceos" />
                        <p className="num-membros">{ceosData.num_membros} aventureiros</p>
                    </div>
                    <aside>
                        <p>transformando, em código, grandes histórias</p>
                        <p>cluster 4 até 2022</p>
                        <div className="flex justify-center align-center">
                            <Support fill="#222222" />
                            <span>trabalho em equipe como guia</span>
                        </div>
                        <div className="flex wrap justify-center">
                            <div>
                                <div className="flex align-center">
                                    <Shield fill="#222222" />
                                    <span>força de vontade como escudo</span>
                                </div>
                                <div className="flex align-center">
                                    <Lens fill="#222222" />
                                    <span>cliente como foco</span>
                                </div>
                                <div className="flex align-center">
                                    <Helmet fill="#222222" />
                                    <span>protagonismo como espírito</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex align-center">
                                    <Sword style={{ transform: "rotate(90deg)" }} fill="#222222" />
                                    <span>criatividade como espada</span>
                                </div>
                                <div className="flex align-center">
                                    <Compass fill="#222222" />
                                    <span>respeito como bússola</span>
                                </div>
                                <div className="flex align-center">
                                    <Dragon fill="#222222" />
                                    <span>sede por desafios</span>
                                </div>
                            </div>
                        </div>
                    </aside>
                </section>

                <section>
                    <div className="titulo-com-linha">
                        <h1 style={{ minWidth: '143px' }}>quadro de metas</h1>
                        <div className="linha"></div>
                    </div>

                    <aside className="flex wrap justify-center">
                        <p style={{ backgroundColor: "#6dc04b" }}>
                            cluster {ceosData.cluster}
                        </p>

                        {ceosMetas.map((meta) => {
                            let pixel = (meta.concluido * 240) / meta.teto;

                            return (
                                <div key={meta.id} className="meta">
                                    <span>
                                        {meta.concluido}/{meta.teto} {meta.titulo}
                                    </span>
                                    <div className="barracinza">
                                        <div className="barraverde" style={{ width: pixel }}></div>
                                    </div>
                                </div>
                            )
                        })}

                        <a href="https://www.brasiljunior.org.br/">visite o portal brasil jr</a>
                    </aside>
                </section>

                <section>
                    <div className="titulo-com-linha">
                        <h1 style={{ minWidth: '176px' }}>media de indicativos</h1>
                        <div className="linha"></div>
                    </div>
                    <div className="flex justify-center">
                        <header>
                            <div className="flex align-center">
                                <Star fill="#33CCFF" />
                                <span>{ceosData.comprometimento}</span>
                            </div>
                            <div className="flex align-center">
                                <Eye fill={colorPart} />
                                <span>{ceosData.participacao}</span>
                            </div>
                            <div className="flex align-center">
                                <Fire fill={colorDisp} />
                                <span>{ceosData.disponibilidade}</span>
                            </div>
                        </header>
                    </div>
                </section>

                <section>
                    <div className="titulo-com-linha">
                        <h1 style={{ minWidth: '205px' }}>percentual de medalhas</h1>
                        <div className="linha"></div>
                    </div>
                    <div className="flex justify-center">
                        <header>
                            <div className="tecnologia" id="tec-platina" onClick={() => clickBtnTec(maiorPlatina.id)}>
                                <Medal fill="#222222" />
                                <span>{maiorPlatina.porc_platina}%</span>
                            </div>
                            <div className="tecnologia" id="tec-diamante" onClick={() => clickBtnTec(maiorDiamante.id)}>
                                <Medal fill="#87CEEB" />
                                <span>{maiorDiamante.porc_diamante}%</span>
                            </div>
                            <div className="tecnologia" id="tec-ouro" onClick={() => clickBtnTec(maiorOuro.id)}>
                                <Medal fill="rgb(255, 215, 0)" />
                                <span>{maiorOuro.porc_ouro}%</span>
                            </div>
                        </header>

                    </div>

                    <div className="flex justify-center">
                        <BtnPrimario texto="estatísticas" width="270px" />
                    </div>
                </section>
                
                <section>
                    <div className="titulo-com-linha">
                        <h1 style={{ minWidth: '184px' }}>quadro de conquistas</h1>
                        <div className="linha"></div>
                    </div>
                    <div className="conquistas-ceos">
                        <Medal fill="rgb(255, 215, 0)" />
                        <Medal fill="rgb(255, 215, 0)" />
                        <Medal fill="rgb(255, 215, 0)" />
                        <Medal fill="rgb(255, 215, 0)" />
                        <Medal fill="rgb(255, 215, 0)" />
                        <Medal fill="rgb(255, 215, 0)" />
                    </div>
                </section>

            </div>

            <Modal closeModal={attShowModal} show={showModal}>
                {
                    idTecnologiaGrafico === undefined ?
                        <h1>Clique em alguma tecnologia!</h1> :
                        <div>
                            <aside className="tec-selecionada">
                                <div className="nome_icone-tec-selecionada">
                                    {/* aq vem o icone da tec selecionada */}
                                    <Medal fill="#222222" />
                                    <span style={{ textAlign: "center" }}>{tec_selecionada.titulo}</span>
                                </div>
                                <div className="descricao-tec-selecionada">
                                    {tec_selecionada.descricao}
                                </div>
                            </aside>
                            <div className="grafico-tecnologia" >
                                <HorizontalBar data={data}
                                    height={281}
                                    width={430}
                                    options={{
                                        legend: {
                                            display: false
                                        },
                                        scales: {
                                            xAxes: [{
                                                gridLines: {
                                                    display: false
                                                }
                                            }],
                                            yAxes: [{
                                                gridLines: {
                                                    display: false
                                                }
                                            }]
                                        },
                                        responsive: true,
                                    }} />
                            </div>
                        </div>
                }
            </Modal>


        </div>
    )
}

export default Ceos
