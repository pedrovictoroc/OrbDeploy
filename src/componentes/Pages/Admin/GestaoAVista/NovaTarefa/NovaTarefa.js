import React, { useState } from 'react'
import { Link } from "react-router-dom";


import Select from '../../../../Components/Select/Select'
import BtnPrimario from '../../../../Components/BtnPrimario/BtnPrimario';
import Input from '../../../../Components/Input/Input'
import Modal from '../../../../Components/Modal/Modal';

import { usuData } from './../../../../../servidor/Dados'

import './NovaTarefa.css'

function NovaTarefa() {
    const [usuarioData] = useState(usuData.map((usu) => { return { nome: usu.nome, id: usu.id } })); //lista de usuarios para exibir no select
    const [showModal, setShowModal] = useState(false); // state que mostra o modal


    function attDeadline(e) {
        //setDeadline(e.target.value.split('-')); // data no formato ano-mes-dia
    }
    function attConclusao(e) {
        //setConclusao(e.target.value.split('-')); // data no formato ano-mes-dia
    }

    function FiltroSelect() {

    }

    function attDescricao(e) {
        //setDescricao(e.target.value);
    }


    //mostra o modal
    function attShowModal() {
        setShowModal(!showModal);
    }
    return (
        <div className="background">
            <div className="admin-cabecalho responsive animation">
                <p>tela administrativa de fulano</p>
                <header>
                    <span>configurações&nbsp;&nbsp; > &nbsp;&nbsp;gestao à vista&nbsp;&nbsp; > &nbsp;&nbsp;nova tarefa</span>
                    <span>
                        <Link to="/admin/gestao-a-vista">voltar</Link>
                    </span>
                </header>

                <main style={{ margin: "4% 0" }}>
                    <div className="filtro-nova-tarefa">
                        <Select
                            id="filtroresponsavel"
                            FunSelect={FiltroSelect}
                            options={
                                [
                                    { nome: "Todos", id: 0 }, ...usuarioData
                                ]
                            }
                            name="responsável"
                        />
                        <Select
                            id="filtromembro"
                            FunSelect={FiltroSelect}
                            options={
                                [
                                    { nome: "Todos", id: 0 }, ...usuarioData
                                ]
                            }
                            name="autor"
                        />
                        <Select
                            id="filtrosetor"
                            FunSelect={FiltroSelect}
                            options={
                                [
                                    { nome: "Todos", id: 0 }
                                ]
                            }
                            name="setor"
                        />

                        <div className="flex">
                            conclusão
                            <input className="input-data" type="date" onChange={attConclusao}></input>
                        </div>

                        <div className="flex">
                            deadline
                            <input className="input-data" type="date" onChange={attDeadline}></input>
                        </div>

                        <div className="flex align-center">
                            <span>descrição</span>
                            <Input name="chave" type="text" attcampo={attDescricao} />
                        </div>
                    </div>

                </main>

                <div className="flex justify-center">
                    <BtnPrimario texto="cadastrar" width="270px" handleClick={attShowModal}/>
                </div>

                <div className="alerta-erro">
                    <span>houve erro <span>X</span>
                    </span>
                </div>

            </div>

            <Modal closeModal={attShowModal} show={showModal}>
                <b style={{fontSize: '2rem', color: '#60b23e'}}>nova tarefa cadastrada!</b>
                <BtnPrimario texto="ok" width="220px" handleClick={attShowModal} />
            </Modal>
        </div>
    )
}

export default NovaTarefa
