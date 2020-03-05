import React, { useState } from 'react'
import { Doughnut, defaults } from 'react-chartjs-2';

import './Mural.css'

import usuario from './../../../servidor/Dados'
import { usuData } from './../../../servidor/Dados'
import { Star, Eye, Fire } from './../../Icons'

import Aventureiro from '../../Components/Aventureiro/Aventureiro'
import BtnPrimario from '../../Components/BtnPrimario/BtnPrimario'
import Modal from '../../Components/Modal/Modal';


function Mural() {
    const [usuarios] = useState(usuData);
    const [showModal, setShowModal] = useState(false); // state que mostra o modal ver todos
    const [showModal2, setShowModal2] = useState(false); // state que mostra o modal btn detalhes

    const [usuarioSelecionado, setUsuarioSelecionado] = useState('');

    //mostra o modal e pega o id da conquista que vai ser excluida
    function attShowModal() {
        setShowModal(!showModal);
    }
    function attShowModal2() {
        setShowModal2(!showModal2);
    }

    function clickBtnDetalhes(usuario) {
        setUsuarioSelecionado(usuario)
    }


    //definindo a cor dos icones de participacao e disponibilidade
    let colorPart = usuarioSelecionado.participacao < 2 ? "#d3d3d3" : usuarioSelecionado.participacao < 5 ? "#33CCFF" : "#195170";

    let colorDisp = usuarioSelecionado.disponibilidade < 2 ? "#d3d3d3" : usuarioSelecionado.disponibilidade < 5 ? "#33CCFF" : "#195170";


    //vericação do mes do ano para listar os aniversariantes
    let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro"];
    let date = new Date();
    let mes = meses[date.getMonth()];



    // grafico heroi
    defaults.global.defaultFontFamily = 'Teko-Light';
    defaults.global.defaultFontSize = 20;
    const data = {
        labels: ['desempenho e proatividade', 'desenvolvimento', 'conquistas'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    '#60b23e',
                    '#8FBC8F',
                    '#9ACD32',
                ],
                borderWidth: 0,
            }
        ]
    };

    return (
        <div className="background">
            <div className="mural responsive animation">
                <header>
                    <h1 className="flex justify-center">última atualização em dezembro de 2019</h1>
                    <a href="http://google.com">consultar documentação orb</a>
                </header>
                <div className="titulo-com-linha">
                    <h1 style={{ minWidth: '250px' }}>aniversariantes de {mes}</h1>
                    <div className="linha"></div>
                </div>

                <div className="aniversariantes flex justify-center">
                    {
                        //renderização dos aniversariantes do mes
                        usuarios.map((usuario) => {
                            let arrayNascimento = usuario.nascimento.split('/');
                            if (arrayNascimento[1] === `0${date.getMonth() + 1}`) {
                                return (
                                    <div key={usuario.id} className="flex" style={{ margin: '10px' }}>
                                        <img src={usuario.avatar} alt="avatar" width="73px" height="73px" />
                                        <div>
                                            <span>{usuario.nome}</span>
                                            <p>{usuario.cargo}</p>
                                        </div>
                                        <div className="data">
                                            <span>{arrayNascimento[0] + "/" + arrayNascimento[1]}</span>
                                        </div>
                                    </div>
                                )
                            }
                            return [];
                        })

                    }
                </div>

                <div className="titulo-com-linha">
                    <h1 style={{ minWidth: '124px' }}>hall dos heróis</h1>
                    <div className="linha"></div>
                </div>

                <div className="usuarios-aventureiros" style={{ borderTop: "none" }}>
                    <Aventureiro rank="1" usuario={usuario} pagina="mural" funcbtn={() => {
                        attShowModal2();
                        clickBtnDetalhes(usuario);
                    }} />
                </div>


                <div className="titulo-com-linha">
                    <h1 style={{ minWidth: '127px' }}>hall das lendas</h1>
                    <div className="linha"></div>
                </div>
                <div>
                    <div className="flex align-center">
                        <div className="flex">
                            <img src={usuario.avatar} alt="avatar" width="73px" height="73px" />
                            <div>
                                <span>cicrano</span>
                                <p style={{ fontSize: '1rem' }}>saiu em 2018</p>
                            </div>
                        </div>
                        <blockquote>
                            <p>ex presidente e diretor de marketing, participou do projeto google glass como desenvolvedor backend, uma das maiores paixões da ágata, também conhecida como ágata da ceos.</p>
                        </blockquote>
                    </div>
                </div>

                <div className="flex justify-center">
                    <BtnPrimario texto="ver todos" width="270px" handleClick={attShowModal} />
                </div>


                {/* modal ver todos */}
                <Modal closeModal={attShowModal} show={showModal}>
                    <div className="lendas-modal">

                        <section>
                            <div className="flex">
                                <img src={usuario.avatar} alt="avatar" width="73px" height="73px" />
                                <div>
                                    <span>cicrano</span>
                                    <p style={{ fontSize: '1rem' }}>saiu em 2018</p>
                                </div>
                            </div>
                            <blockquote>
                                <p>ex presidente e diretor de marketing, participou do projeto google glass como desenvolvedor backend, uma das maiores paixões da ágata, também conhecida como ágata da ceos.</p>
                            </blockquote>
                        </section>

                        <section>
                            <div className="flex">
                                <img src={usuario.avatar} alt="avatar" width="73px" height="73px" />
                                <div>
                                    <span>cicrano</span>
                                    <p style={{ fontSize: '1rem' }}>saiu em 2018</p>
                                </div>
                            </div>
                            <blockquote>
                                <p>ex presidente e diretor de marketing, participou do projeto google glass como desenvolvedor backend, uma das maiores paixões da ágata, também conhecida como ágata da ceos.</p>
                            </blockquote>
                        </section>

                        <section>
                            <div className="flex">
                                <img src={usuario.avatar} alt="avatar" width="73px" height="73px" />
                                <div>
                                    <span>cicrano</span>
                                    <p style={{ fontSize: '1rem' }}>saiu em 2018</p>
                                </div>
                            </div>
                            <blockquote>
                                <p>ex presidente e diretor de marketing, participou do projeto google glass como desenvolvedor backend, uma das maiores paixões da ágata, também conhecida como ágata da ceos.</p>
                            </blockquote>
                        </section>

                        <section>
                            <div className="flex">
                                <img src={usuario.avatar} alt="avatar" width="73px" height="73px" />
                                <div>
                                    <span>cicrano</span>
                                    <p style={{ fontSize: '1rem' }}>saiu em 2018</p>
                                </div>
                            </div>
                            <blockquote>
                                <p>ex presidente e diretor de marketing, participou do projeto google glass como desenvolvedor backend, uma das maiores paixões da ágata, também conhecida como ágata da ceos.</p>
                            </blockquote>
                        </section>

                        <div className="paginacao">
                            <div className="btn-num selecionado">
                                1
                            </div>
                            <div className="btn-num">
                                2
                            </div>
                            <div className="btn-num">
                                3
                            </div>
                        </div>
                    </div>

                </Modal>

                {/* modal click btn detalhes */}
                <Modal closeModal={attShowModal2} show={showModal2}>
                    <div className="detalhes-mural">
                        <section>
                            <div className="flex">
                                <img src={usuarioSelecionado.avatar} alt="avatar" width="120px" height="120px" />
                                <div>
                                    <span>{usuarioSelecionado.usuario}</span>
                                    <p>{usuarioSelecionado.cargo}</p>
                                </div>
                            </div>
                            <p>herói #1 no mês de {mes}</p>
                        </section>

                        <aside style={{borderTop: "1px solid #222222", padding: 15}}>
                            <div className="flex justify-center">
                                <header>
                                    <div className="flex align-center">
                                        <Star fill="#33CCFF" />
                                        <span>{usuarioSelecionado.comprometimento}</span>
                                    </div>
                                    <div className="flex align-center">
                                        <Eye fill={colorPart} />
                                        <span>{usuarioSelecionado.participacao}</span>
                                    </div>
                                    <div className="flex align-center">
                                        <Fire fill={colorDisp} />
                                        <span>{usuarioSelecionado.disponibilidade}</span>
                                    </div>
                                </header>
                            </div>

                            <div className="flex justify-center align-center wrap">
                                <div className="pontos-heroi">+{usuarioSelecionado.XP} de xp</div>

                                <div className="grafico-heroi">
                                    <Doughnut data={data}
                                        height={281}
                                        width={430}
                                        options={{
                                            responsive: true,
                                            legend: {
                                                position: 'right'
                                            }
                                
                                        }} />
                                </div>
                            </div>
                        </aside>

                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Mural
