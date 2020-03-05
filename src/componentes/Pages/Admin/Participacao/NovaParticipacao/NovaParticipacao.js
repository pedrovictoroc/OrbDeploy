import React, { useState } from 'react'
import { Link } from "react-router-dom";

import Select from './../../../../Components/Select/Select'
import BtnPrimario from '../../../../Components/BtnPrimario/BtnPrimario';
import Modal from '../../../../Components/Modal/Modal';


import './NovaParticipacao.css'

function NovaParticipacao() {

    const [showModal, setShowModal] = useState(false); // state que mostra o modal
    function attShowModal() {
        setShowModal(!showModal);
    }

    function attSelect() {

    }

    // funções relacionadas ao filtro data
    function attDate(e) {
        //setData(e.target.value.split('-')); // data no formato ano-mes-dia
    }

    return (
        <div className="background">
            <div className="admin-cabecalho responsive animation">
                <p>tela administrativa de fulano</p>
                <header>
                    <span>configurações&nbsp;&nbsp; > &nbsp;&nbsp;participação&nbsp;&nbsp; > &nbsp;&nbsp;nova participação</span>
                    <span>
                        <Link to="/admin/participacao">voltar</Link>
                    </span>
                </header>

                <main style={{ margin: "4% 0" }}>
                    <div className="nova-part">
                        <Select
                            id="filtroevento"
                            FunSelect={attSelect}
                            options={
                                [
                                    { nome: "Todos", id: 0 }
                                ]
                            }
                            name="evento"
                        />
                        <Select
                            id="filtromembro"
                            FunSelect={attSelect}
                            options={
                                [
                                    { nome: "Todos", id: 0 }
                                ]
                            }
                            name="membro"
                        />
                        <div className="flex">
                            data
                            <input className="input-data" type="date" onChange={attDate}></input>
                        </div>
                    </div>

                    <div className="flex justify-center" style={{ marginTop: "10%" }}>
                        <BtnPrimario texto="cadastrar" width="270px" handleClick={attShowModal} />
                    </div>
                    <div className="flex justify-center">
                        <span style={{ fontSize: '1.5rem', color: 'red' }}>
                            houve erro <span>X</span>
                        </span>
                    </div>
                </main>

            </div>

            <Modal closeModal={attShowModal} show={showModal}>
                <p style={{ margin: 0, color: '#6dc04b', fontSize: "2.5rem" }}>ação concluída</p>
                <BtnPrimario texto="ok" width="220px" handleClick={attShowModal} />
            </Modal>
        </div>
    )
}

export default NovaParticipacao
