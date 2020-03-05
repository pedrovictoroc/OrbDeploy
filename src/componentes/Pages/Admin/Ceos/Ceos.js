import React, { useState } from 'react'
import { Link } from "react-router-dom";

import './Ceos.css'

import { metas } from './../../../../servidor/Dados'

import BtnPrimario from '../../../Components/BtnPrimario/BtnPrimario';
import Modal from '../../../Components/Modal/Modal';

import { Visto } from './../../../Icons'

function Ceos() {
    const [cluster, setCluster] = useState(1);
    const [metasCeos, setMetasCeos] = useState(metas);

    const [showModal, setShowModal] = useState(false); // state que mostra o modal

    function incrementarCluster() {
        if (cluster < 5) {
            setCluster(cluster + 1);
        }
    }
    function decrementarCluster() {
        if (cluster > 1) {
            setCluster(cluster - 1);
        }
    }
    function incrementarMeta(meta) {
        // se for inteiro, incrementa de um em um 
        let incremento;
        if (meta.concluido % 1 === 0) {
            incremento = 1;
        }
        else { // se n for, incrementa de 0.1
            incremento = 0.1;
        }

        let arrayMetas = metasCeos;
        arrayMetas.map((m) => {
            if (m === meta) {
                m.concluido += incremento;
            }
            return 0;
        })

        setMetasCeos([...arrayMetas]);
    }

    //mostra o modal e pega o id da conquista que vai ser excluida
    function attShowModal() {
        setShowModal(!showModal);
    }

    return (
        <div className="background">
            <div className="admin-cabecalho responsive animation">
                <p>tela administrativa de fulano</p>
                <header>
                    <span>configurações&nbsp;&nbsp; > &nbsp;&nbsp;ceos</span>
                    <span>
                        <Link to="/admin">voltar</Link>
                    </span>
                </header>
                <div className="info-datas">
                    <div>
                        <p>último mês registrado: <span>dezembro de 2019</span> </p>
                        <p>mês atual: <span>janeiro de 2020</span> </p>
                    </div>
                    <BtnPrimario texto="registrar mês" width="270px" backColor="#222222" handleClick={attShowModal} />
                </div>
                <div className="set-cluster">
                    <div className="flex">
                        <p>
                            cluster {cluster}
                        </p>
                        <div className="settingClusters">
                            <div className="setClusterInc" onClick={incrementarCluster}></div>
                            <div className="setClusterDec" onClick={decrementarCluster}></div>
                        </div>

                    </div>
                    <BtnPrimario texto="salvar" width="270px" backColor="#dddddd" textColor="#222222" handleClick={attShowModal} />
                </div>

                <div className="set-metas">
                    {metasCeos.map((meta) => {
                        let pixel = (meta.concluido * 320) / meta.teto;

                        // avitando bug de precisao
                        let metaConcluida = meta.concluido;
                        if (meta.concluido % 1 !== 0) {
                            metaConcluida = meta.concluido.toFixed(1);
                        }
                        return (
                            <div className="set-meta" key={meta.id}>
                                <span style={{ width: 300 }}>{meta.titulo}</span>
                                <span onClick={() => { incrementarMeta(meta) }} style={{ width: 120, textAlign: 'center', cursor: 'cell' }}>
                                    <span style={{ color: '#6dc04b' }}>{metaConcluida}</span>
                                    /{meta.teto}
                                </span>
                                <div className="flex ">
                                    <div className="barracinza-admin" onClick={() => { incrementarMeta(meta) }} >
                                        <div className="barraverde-admin" style={{ width: pixel }}></div>
                                    </div>
                                </div>

                                <Visto fill='#6dc04b'/>
                                <Link style={{ color: '#195170', cursor: 'pointer' }} to="/admin/ceos/att-meta">atualizar</Link>
                            </div>
                        )
                    })}
                </div>

                <div className="flex justify-center">
                    <BtnPrimario texto="nova meta" width="270px" isLink={true} link="/admin/ceos/nova-meta" />
                </div>

                <Modal closeModal={attShowModal} show={showModal}>
                    <p style={{ margin: 0, color: '#6dc04b' }}>atualizado com sucesso</p>
                    <BtnPrimario texto="ok" width="220px" handleClick={attShowModal} />
                </Modal>
            </div>
        </div>
    )
}

export default Ceos