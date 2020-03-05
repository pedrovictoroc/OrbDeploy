import React, { useState } from 'react'
import { Link } from "react-router-dom";

import './GerenciarMembros.css'

import { usuData } from './../../../../servidor/Dados'
import Aventureiro from '../../../Components/Aventureiro/Aventureiro'
import BtnPrimario from '../../../Components/BtnPrimario/BtnPrimario';

function GerenciarMembros() {
    const [arrayUsuData] = useState(usuData);

    let rank = 0;

    let lvls = [
        20, 40, 60, 100, 200, 500, 700, 900, 1100, 1400, 1700, 2000, 2300, 2600, 2900, 3100, 3400, 3700, 4000, 4400, 4800, 5200, 5600, 6000, 6400, 6800, 7200, 7600, 8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500, 12000, 12500, 13000, 13600, 14200, 14800, 15400, 16000, 16600, 17200, 17800, 18400, 19000, 20000
    ];

    return (
        <div className="background">
            <div className="admin-cabecalho responsive animation">
                <p>tela administrativa de fulano</p>
                <header>
                    <span>configurações&nbsp;&nbsp; > &nbsp;&nbsp;gerenciar membros</span>
                    <span>
                        <Link to="/admin">voltar</Link>
                    </span>
                </header>
                <div className="usuarios-aventureiros" style={{borderTop: "none"}}>
                    {
                        arrayUsuData.map((usuario) => {
                            rank++;

                            let somalvls = 0;
                            let i = 0;
                            while (usuario.XP >= somalvls) {
                                somalvls += lvls[i];
                                i++;
                            }
                            let level = i - 1;

                            return (
                                <Aventureiro key={usuario.id} rank={rank} level={level} usuario={usuario} btn="configurar"/>
                            )
                        })
                    }
                </div>
                <div className="flex justify-center">
                    <BtnPrimario isLink={true} link="/admin/gerenciar-membros/cadastrar-membros" texto="cadastrar novo" width="270px" />
                </div>
                

            </div>
        </div>
    )
}

export default GerenciarMembros
