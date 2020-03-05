import React, { useState } from 'react'
import { Link } from "react-router-dom";

import Input from '../../../../Components/Input/Input'
import Select from '../../../../Components/Select/Select'
import BtnPrimario from '../../../../Components/BtnPrimario/BtnPrimario';

import { usuData } from './../../../../../servidor/Dados'

import './NovaConquista.css'

function NovaConquista() {
    const [usuarioData] = useState(usuData.map((usu) => { return { nome: usu.nome, id: usu.id } }));

    const [titulo, setTitulo] = useState(''); // state da titulo selecionada 
    const [data, setData] = useState([]); // state da data selecionada
    const [xp, setXp] = useState(''); // state da xp digitada
    const [descricao, setDescricao] = useState(''); // state da descricao digitada
    const [arrayMembros, setArrayMembros] = useState([]); // array que guarda os ids dos usuarios selecionados em cada select

    //select inicial
    const [arraySelect, setArraySelect] = useState([<Select
        id="filtromembro-nova-conquista-00"
        FunSelect={attSelect}
        options={
            [
                ...usuarioData
            ]
        }
        name="membros"
        key=""
    />])

    const [contSelect, setContSelect] = useState(1); // contador que irá junto ao id de cada select para que os ids sejam diferentes

    // setando os states
    function attTitulo(e) {
        setTitulo(e.target.value);
    }
    function attData(e) {
        setData(e.target.value.split('-')); // data no formato ano-mes-dia
    }
    function attXp(e) {
        setXp(e.target.value);
    }
    function attDescricao(e) {
        setDescricao(e.target.value);
    }
    function attSelect(id) {
        let select = document.getElementById(id);
        let selectOption = select.options[select.selectedIndex].value; // id do membro
        
        // pegando o id do select para atualizar na posição no array
        let idSelect = select.id.substr(select.id.indexOf(0) + 1, select.id.length - 1);
        
        let newArrayMembros = arrayMembros;
        newArrayMembros[idSelect] = selectOption;

        setArrayMembros(newArrayMembros);
    }

    // adiciona um novo select
    function NovoMembro() {
        let novoArray = arraySelect;
        novoArray.push(
            <Select
                id={"filtromembro-nova-conquista-0" + contSelect}
                FunSelect={attSelect}
                options={
                    [
                        ...usuarioData
                    ]
                }
                
            />)
        setArraySelect([...novoArray]);
        setContSelect(contSelect + 1);
    }

    function uploadImg(e) {
        let previewImg = document.getElementById('img-selecionada');

        const fileToUpload = e.target.files.item(0);
        const reader = new FileReader();
        // evento disparado quando o reader terminar de ler 
        reader.onload = e => previewImg.src = e.target.result;

        // solicita ao reader que leia o arquivo 
        // transformando-o para DataURL. 
        // Isso disparará o evento reader.onload.
        if (fileToUpload && fileToUpload.type.match('image.*')) {
            reader.readAsDataURL(fileToUpload);
            previewImg.style.display = "block";
            console.log(fileToUpload);
            
        }
        else{
            previewImg.style.display = "none";
        }
    }

    return (
        <div className="background">
            <div className="admin-cabecalho responsive animation">
                <p>tela administrativa de fulano</p>
                <header>
                    <span>configurações&nbsp;&nbsp; > &nbsp;&nbsp;conquistas &nbsp;&nbsp; > &nbsp;&nbsp; nova conquista</span>
                    <span>
                        <Link to="/admin/conquistas">voltar</Link>
                    </span>
                </header>

                <section>
                    <div className="inputs-nova-conquista">
                        <div className="flex">
                            <span>título</span>
                            <Input name="título" type="text" attcampo={attTitulo} />
                        </div>

                        <div className="flex">
                            <span>data</span>
                            <input className="input-data-nova-conquista" type="date" onChange={attData}></input>
                        </div>
                        <div className="flex">
                            <span>xp</span>
                            <Input name="xp" type="text" attcampo={attXp} />
                        </div>
                        <div className="flex">
                            <span>descrição</span>
                            <Input name="descrição" type="text" attcampo={attDescricao} />
                        </div>
                    </div>

                    <div className="inputs-nova-conquista">
                        <div className="flex wrap">
                            {arraySelect.map((select) => select)}
                        </div>
                        <div className="flex">
                            <span onClick={NovoMembro} style={{ color: "#195170", cursor: "pointer" }}>+ membros</span>
                        </div>
                    </div>

                    <div className="file-conquista flex justify-center">
                        <input onChange={uploadImg} type="file" id="selecao-arquivo"/>
                    </div>

                    <div className="flex justify-center" >
                        <img alt="img-selecionada" id="img-selecionada" style={{display: 'none', width: 120, height: 120}}/>
                    </div>
                    
                    <div className="flex justify-center">
                        <BtnPrimario texto="registrar" width="270px" />
                    </div>

                    <div className="alerta-erro">
                        <span>houve erro <span>X</span>
                        </span>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default NovaConquista
