import React from 'react'
import { Link } from "react-router-dom";

import './NovaMeta.css'

import Imput from '../../../../Components/Input/Input';
import BtnPrimario from '../../../../Components/BtnPrimario/BtnPrimario';

function NovaMeta() {

    function attImput(params) {
        
    }
    return (
        <div className="background">
            <div className="admin-cabecalho responsive animation">
                <p>tela administrativa de fulano</p>
                <header>
                    <span>configurações&nbsp;&nbsp; > &nbsp;&nbsp;ceos &nbsp;&nbsp; > &nbsp;&nbsp; meta1</span>
                    <span>
                        <Link to="/admin/ceos">voltar</Link>
                    </span>
                </header>

                <section className="flex wrap justify-center imputs-novameta">
                    <div className="flex">
                        <span>título</span>
                        <Imput name="título" type="text" attcampo={attImput} />
                    </div>
                    <div className="flex" style={{width: 200}}>
                        <span>concluído</span>
                        <Imput name="concluído" type="text" attcampo={attImput} />
                    </div>
                    <div className="flex" style={{width: 150}}>
                        <span>teto</span>
                        <Imput name="teto" type="text" attcampo={attImput} />
                    </div>
                </section>

                <div className="flex justify-center">
                    <BtnPrimario texto="salvar" width="270px" />
                </div>
                
            </div>
        </div>
    )
}

export default NovaMeta
