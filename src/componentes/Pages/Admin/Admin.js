import React, { Component } from 'react'
import { Link } from "react-router-dom";

import './Admin.css'

import BtnPrimario from '../../Components/BtnPrimario/BtnPrimario'

export class Admin extends Component {
    render() {
        return (
            <div className="background">
                <div className="admin-cabecalho responsive animation">
                    <p>tela administrativa de fulano</p>
                    <header>
                        <span>configurações</span>
                    </header>
                    
                    <div className="btns-admin">
                        <div className="linha-btns">
                            <BtnPrimario isLink={true} link="/admin/gerenciar-membros" texto="gerenciar membros" width="270px" />
                            <BtnPrimario isLink={true} link="/admin/gestao-a-vista" texto="gestão à vista" width="270px" />
                            <BtnPrimario isLink={true} link="/admin/participacao" texto="participação" width="270px" />
                        </div>
                        <div className="linha-btns">
                            <BtnPrimario texto="avaliação" width="270px" />
                            <BtnPrimario texto="tecnologias" width="270px" />
                            <BtnPrimario isLink={true} link="/admin/conquistas" texto="conquistas" width="270px" />
                        </div>
                        <div className="linha-btns">
                            <BtnPrimario isLink={true} link="/admin/ceos" texto="ceos" width="270px" />
                            <Link to="#">consulte o manual</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin
