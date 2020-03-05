import React, { useState } from 'react'
import { Link } from "react-router-dom";

import './Conquistas.css'

import { conquistas, usuData, usuConqData } from './../../../../servidor/Dados'

import Select from './../../../Components/Select/Select'
import BtnPrimario from '../../../Components/BtnPrimario/BtnPrimario';
import Input from '../../../Components/Input/Input'
import Modal from '../../../Components/Modal/Modal';

import { Search, Trophy } from '../../../Icons';

function Conquistas() {
    const [conquistasData, setConquistasData] = useState(conquistas);
    const [usuarioConqData] = useState(usuConqData);
    const [usuarioData] = useState(usuData.map((usu) => { return { nome: usu.nome, id: usu.id } }));

    const [conquistasRender, setConquistasRender] = useState(conquistas); //conquistas renderizadas

    const [data, setData] = useState([]); // state da data selecionada no filtro
    const [chave, setChave] = useState(''); // state da chave digitada no filtro

    const [showModal, setShowModal] = useState(false); // state que mostra o modal

    const [excluirConq, setExcluirConq] = useState(''); //guarda o id da conquista a ser excluida


    // filtro membro
    function filtroMembro(id) {
        let select = document.getElementById(id);
        let selectOption = select.options[select.selectedIndex].value;

        if (selectOption === "0") { // Todos os membros selecionados
            setConquistasRender(conquistasData);
        }
        else { // algum membro selecionado
            let usuarioConquistas = usuarioConqData.filter((conqUsu) => conqUsu.idUsuario.toString() === selectOption);

            let arrayConquistas = [];
            usuarioConquistas.map((conqUsu) => {
                conquistasData.map((conq) => {
                    if (conqUsu.idConquista === conq.id) {
                        arrayConquistas.push(conq);
                    }
                    return 0;
                })
                return 0;
            })

            setConquistasRender(arrayConquistas);
        }
    }

    // filtro data
    function attDate(e) {
        setData(e.target.value.split('-')); // data no formato ano-mes-dia
    }
    function filtroDate() {
        let arrayConquistas = [];

        conquistasRender.map((conquista) => {
            let dataConquista = conquista.data.split('/');
            if (dataConquista[0] === data[2] && dataConquista[1] === data[1] && dataConquista[2] === data[0]) {
                arrayConquistas.push(conquista);
            }
            return 0;
        })

        setConquistasRender(arrayConquistas);
    }

    //filtro chave
    function attImput(ch) {
        setChave(ch.target.value);
    }
    function pesquisarChave() {
        if (chave === '') {
            setConquistasRender(conquistasData);
            return 0;
        }
        let palavrasChave = chave.toLowerCase();
        let arrayConq = conquistasRender.filter( (conq) => {
            let palavrasDesc = conq.descricao.toLowerCase();
            if (palavrasDesc.search(palavrasChave) !== -1) {
                return conq;
            }
            return 0;
        } )
        setConquistasRender(arrayConq);
    }

    // excluir conquista
    function excluirConqSelecionada() {
        //exluindo dos dados
        let newArrayConqData = conquistasData.filter( (conq) => conq.id !== excluirConq );
        //excluindo do render
        let newArrayConqRender = conquistasRender.filter( (conq) => conq.id !== excluirConq );

        setConquistasData(newArrayConqData);
        setConquistasRender(newArrayConqRender);
        setExcluirConq('');
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
                    <span>configurações&nbsp;&nbsp; > &nbsp;&nbsp;conquistas</span>
                    <span>
                        <Link to="/admin">voltar</Link>
                    </span>
                </header>

                <div className="filtro-conquistas">
                    <p>filtro:</p>
                    <Select
                        id="filtromembro"
                        FunSelect={filtroMembro}
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

                    <div className="flex filtro-chave align-center">
                        <span>chave</span>
                        <Input name="chave" type="text" attcampo={attImput} />

                        <div onClick={pesquisarChave}>
                            <Search fill="#195170" />
                        </div>
                    </div>
                </div>

                <section>

                    {conquistasRender.map((conquista) => {
                        // obtendo os nomes dos usuarios que tem a conquista
                        let conqUsuario = usuarioConqData.filter((conqUsu) => conqUsu.idConquista === conquista.id)

                        let nomesUsuario = "";

                        conqUsuario.map((conqUsu) => {
                            usuarioData.map((usu) => {
                                if (usu.id === conqUsu.idUsuario) {
                                    nomesUsuario = nomesUsuario + usu.nome + ", ";
                                }
                                return 0;
                            })
                            return 0;
                        })

                        return (
                            <div className="conquista" key={conquista.id}>
                                <div className="flex align-center">
                                    <Trophy fill="#c4941d" />
                                    <div style={{ width: '200px', textAlign: 'center' }}>
                                        <p>conquista x</p>
                                        <p style={{ fontSize: '1.2rem' }}>por: &nbsp;
                                        <span style={{ color: '#195170' }}>{nomesUsuario}</span>
                                        </p>
                                    </div>
                                </div>
                                <p style={{ fontSize: '1.5rem', width: '300px', textAlign: 'center' }}>{conquista.descricao}</p>
                                <aside style={{ fontSize: '1.5rem' }}>
                                    <span style={{ color: '#6dc04b' }}>xp total {conquista.xp}</span>
                                    <span>em: {conquista.data}</span>
                                    <BtnPrimario texto="excluir" width="200px" backColor="#222222" handleClick={() => { 
                                        attShowModal();
                                        setExcluirConq(conquista.id); 
                                    }} />
                                </aside>
                            </div>
                        )
                    })}

                </section>

                <div className="flex justify-center">
                    <BtnPrimario texto="cadastrar novo" isLink={true} link="/admin/conquistas/nova-conquista" width="270px" />
                    
                </div>
            </div>

            <Modal closeModal={attShowModal} show={showModal}>
                <p>tem certeza que deseja excluir essa conquista?</p>
                <p>essa ação irá apagar todos os dados dessa conquista</p>
                <BtnPrimario texto="confirmar" width="220px" backColor="#222222" handleClick={() => {
                    excluirConqSelecionada();
                    attShowModal();
                }}/>
                <BtnPrimario texto="cancelar" width="220px" handleClick={attShowModal} />
            </Modal>
        </div>
    )
}

export default Conquistas
