import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { SetUser } from '../../../store/actions/Aventureiro' // redux para setar o usuario selecionado

import Checkbox from './../../Components/Checkbox/Checkbox'
import Select from '../../Components/Select/Select'
import Aventureiro from '../../Components/Aventureiro/Aventureiro'

import './Aventureiros.css'

import { usuData } from './../../../servidor/Dados'

function Aventureiros() {
    const [arrayUsuData] = useState(usuData);
    const [usuRender, setusuRender] = useState(usuData);

    const dispatch = useDispatch(); // redux para setar o usuario selecionado

    function FiltroBtn(id) {

        //se houver, desmarcando outro checkbox selecionado
        let btnSelecionadoAntigo = document.querySelector(".perm");
        if (btnSelecionadoAntigo) {
            btnSelecionadoAntigo.classList.remove("perm");
        }

        //marcando o checkbox
        let btnSelecionadoAtual = document.getElementById("checkmark " + id);
        btnSelecionadoAtual.classList.add("perm");

        //verificaçao de qual filtro selecionado
        let arrayUsuarios = usuRender;

        arrayUsuarios.sort(function (a, b) {
            // menor pro maior
            if (id === "nome") {
                if (a[id] > b[id]) {
                    return 1;
                }
                if (a[id] < b[id]) {
                    return -1;
                }
                return 0;
            }
            else { //contrario
                if (a[id] > b[id]) {
                    return -1;
                }
                if (a[id] < b[id]) {
                    return 1;
                }
                return 0;
            }
        })

        setusuRender([...arrayUsuarios]);
    }

    function FiltroSelect(id) {
        let select = document.getElementById(id);
        let selectOption = select.options[select.selectedIndex].value;

        if (selectOption === "Todas") {
            setusuRender(arrayUsuData);
        }
        else {
            let usuFilter = arrayUsuData.filter(usuario => usuario.setor === selectOption);
            setusuRender(usuFilter);
        }
    }

    // funcao com redux para setar o usuario selecionado
    function clickBtnDetalhes(usuario) {
        dispatch(SetUser(usuario));
    }

    let rank = 0;

    let lvls = [
        20, 40, 60, 100, 200, 500, 700, 900, 1100, 1400, 1700, 2000, 2300, 2600, 2900, 3100, 3400, 3700, 4000, 4400, 4800, 5200, 5600, 6000, 6400, 6800, 7200, 7600, 8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500, 12000, 12500, 13000, 13600, 14200, 14800, 15400, 16000, 16600, 17200, 17800, 18400, 19000, 20000
    ];

    return (
        <div className="background">
            <div className="aventureiros responsive animation">
                <div className="filtros">
                    <div className="flex">
                        <span>ranking:</span>
                        <Checkbox name="a-z" id="nome" FuncCheckbox={FiltroBtn} />
                        <Checkbox name="xp" id="XP" FuncCheckbox={FiltroBtn} />
                    </div>
                    <Select
                        id="filtrosetor"
                        FunSelect={FiltroSelect}
                        options={
                            [
                                { nome: "Todas", id: "Todas" },
                                { nome: "Gestão de Pessoas", id: "Gestão de Pessoas" },
                                { nome: "Administrativo", id: "Administrativo" },
                                { nome: "Marketing", id: "Marketing" },
                                { nome: "Financeiro", id: "Financeiro" },
                                { nome: "Projetos", id: "Projetos" }
                            ]
                        }
                        name="setor"
                    />
                    <Select
                        id="filtromedalhas"
                        FunSelect={FiltroSelect}
                        options={
                            ["Todas"]
                        }
                        name="medalhas"
                    />
                    <Select id="filtroconquistas"
                        FunSelect={FiltroSelect}
                        options={
                            ["Todas"]
                        }
                        name="conquistas"
                    />
                </div>
                <div className="filtros">
                    <Checkbox name="comprometimento" id="comprometimento" FuncCheckbox={FiltroBtn} />
                    <Checkbox name="participação" id="participacao" FuncCheckbox={FiltroBtn} />
                    <Checkbox name="disponibilidade" id="disponibilidade" FuncCheckbox={FiltroBtn} />
                </div>
                <div className="usuarios-aventureiros">
                    {
                        usuRender.map((usuario) => {
                            rank++;

                            let somalvls = 0;
                            let i = 0;
                            while (usuario.XP >= somalvls) {
                                somalvls += lvls[i];
                                i++;
                            }
                            let level = i - 1;

                            return (
                                <Aventureiro key={usuario.id} rank={rank} level={level} usuario={usuario} funcbtn={() => clickBtnDetalhes(usuario) } isLink={true} toLink="/aventureiros/detalhe-aventureiro"/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Aventureiros
