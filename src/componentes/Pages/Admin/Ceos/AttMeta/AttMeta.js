import React from 'react'
import { Link } from "react-router-dom";

import './AttMeta.css'
import Imput from '../../../../Components/Input/Input';
import BtnPrimario from '../../../../Components/BtnPrimario/BtnPrimario';

function AttMeta() {

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

                <section className="flex wrap justify-center imputs-attmeta">
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
                    <BtnPrimario texto="salvar alterações" width="270px" backColor="#dddddd" textColor="#222222" />
                </div>
                <div className="flex justify-center">
                    <BtnPrimario texto="remover" width="270px" backColor="#222222"/>
                </div>
            </div>
        </div>
    )
}

export default AttMeta
