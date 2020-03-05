import React, { useState } from 'react'
import { Link } from "react-router-dom";

import './GestaoAVista.css'

import Select from './../../../Components/Select/Select'
import BtnPrimario from '../../../Components/BtnPrimario/BtnPrimario';
import Input from '../../../Components/Input/Input'


import { usuData } from './../../../../servidor/Dados'

import { Search } from '../../../Icons';

function GestaoAVista() {
    const [usuarioData] = useState(usuData.map((usu) => { return { nome: usu.nome, id: usu.id } })); //lista de usuarios para exibir no select
    const [usuRender, setUsuRender] = useState(usuData); //usuarios renderizados

    const [data, setData] = useState([]); // state da data selecionada no filtro
    const [chave, setChave] = useState([]);


    //funções relacionadas ao input de evento


    // funções relacionadas ao filtro data
    function attDate(e) {
        setData(e.target.value.split('-')); // data no formato ano-mes-dia
    }
    function filtroDate() {

    }

    function FiltroSelect() {

    }

    function attChave(e) {
        //setChave(e.target.value);
    }
    function pesquisarChave() {

    }
    return (
        <div className="background">
            <div className="admin-cabecalho responsive animation">
                <p>tela administrativa de fulano</p>
                <header>
                    <span>configurações&nbsp;&nbsp; > &nbsp;&nbsp;gestao à vista</span>
                    <span>
                        <Link to="/admin">voltar</Link>
                    </span>
                </header>
                <main style={{ margin: "4% 0" }}>
                    <p className="" style={{ textAlign: "center" }}>janeiro de 2020</p>
                    <div className="filtro-gestavista">
                        <p>filtro:</p>
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
                            <input className="input-data" type="date" onChange={attDate}></input>
                            <div onClick={filtroDate}>
                                <Search fill="#195170" />
                            </div>

                        </div>

                        <div className="flex">
                            deadline
                            <input className="input-data" type="date" onChange={attDate}></input>
                            <div onClick={filtroDate}>
                                <Search fill="#195170" />
                            </div>

                        </div>

                        <div className="flex align-center">
                            <span>chave</span>
                            <Input name="chave" type="text" attcampo={attChave} />

                            <div onClick={pesquisarChave}>
                                <Search fill="#195170" />
                            </div>
                        </div>
                    </div>

                    {usuRender.map((usu) => {
                        return (
                            <div className="usuario-gestavista">
                                <div className="dados-usuario-gestavista" >
                                    <img src={usu.avatar} alt="avatar" width="73px" height="73px" />
                                    <div>
                                        <p>{usu.nome}</p>
                                        <p style={{ fontSize: '1.2rem' }}>{usu.setor}</p>
                                    </div>
                                </div>

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
                        )
                    })}



                </main>

                <div className="flex justify-center">
                    <BtnPrimario isLink={true} link="/admin/gestao-a-vista/nova-tarefa" texto="nova tarefa" width="270px" />
                </div>
            </div>
        </div>
    )
}

export default GestaoAVista
