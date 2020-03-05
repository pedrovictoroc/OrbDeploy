import React, { useState } from 'react'
import { Link } from "react-router-dom";

import Select from './../../../Components/Select/Select'
import BtnPrimario from '../../../Components/BtnPrimario/BtnPrimario';
import Input from '../../../Components/Input/Input'

import { Search } from '../../../Icons';

import { usuData } from './../../../../servidor/Dados'

import './Participacao.css'

function Participacao() {
    //const [usuarios] = useState(usuData);
    const [usuarioData] = useState(usuData.map((usu) => { return { nome: usu.nome, id: usu.id } })); //lista de usuarios para exibir no select

    const [usuRender, setUsuRender] = useState(usuData); //usuarios renderizados

    const [data, setData] = useState([]); // state da data selecionada no filtro
    const [evento, setEvento] = useState(''); // state input evento digitado no filtro

    
    //funções relacionadas ao input de evento
    function attImput(e) {
        setEvento(e.target.value);
    }
    function pesquisarEvento() {

    }

    //função para filtrar membros
    function FiltroMembro() {

    }

    // funções relacionadas ao filtro data
    function attDate(e) {
        setData(e.target.value.split('-')); // data no formato ano-mes-dia
    }
    function filtroDate() {

    }


    return (
        <div className="background">
            <div className="admin-cabecalho responsive animation">
                <p>tela administrativa de fulano</p>
                <header>
                    <span>configurações&nbsp;&nbsp; > &nbsp;&nbsp;participação</span>
                    <span>
                        <Link to="/admin">voltar</Link>
                    </span>
                </header>
                <main style={{ margin: "4% 0" }}>
                    <p className="" style={{ textAlign: "center" }}>janeiro de 2020</p>
                    <div className="filtro-participacao">
                        <p>filtro:</p>
                        <div className="flex align-center">
                            <span>evento</span>
                            <Input name="evento" type="text" attcampo={attImput} />

                            <div onClick={pesquisarEvento}>
                                <Search fill="#195170" />
                            </div>
                        </div>
                        <Select
                            id="filtromembro"
                            FunSelect={FiltroMembro}
                            options={
                                [
                                    { nome: "Todos", id: 0 }, ...usuarioData
                                ]
                            }
                            name="membro"
                        />
                        <div className="flex">
                            data
                            <input className="input-data" type="date" onChange={attDate}></input>
                            <div onClick={filtroDate}>
                                <Search fill="#195170" />
                            </div>

                        </div>
                    </div>


                    {usuRender.map((usu, index) => {
                        return (
                            <div className="usuario-participacao">
                                <div className="dados-usuario-participacao" >
                                    <img src={usu.avatar} alt="avatar" width="73px" height="73px" />
                                    <div>
                                        <p>{usu.nome}</p>
                                        <p style={{ fontSize: '1.2rem' }}>{usu.setor}</p>
                                    </div>
                                </div>
                                <span>evento {index}</span>
                                <span>data: 08/01</span>
                            </div>
                        )
                    })}

                </main>

                <div className="flex justify-center">
                    <BtnPrimario isLink={true} link="/admin/participacao/nova-participacao" texto="nova participação" width="270px" />
                </div>

            </div>

        </div>
    )
}

export default Participacao
