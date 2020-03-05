import React, { Component } from 'react'
import { Link } from "react-router-dom";

import './Login.css';

import LogoOrb from '../../Images/OrbLogoCompleta.png'
import ImgCeos from '../../Images/CEOS.png'
import Input from '../../Components/Input/Input'
import Checkbox from '../../Components/Checkbox/Checkbox';

import { Sword, Shield } from '../../Icons';


class Login extends Component {

    state = {
        usuario: "",
        senha: "",
        permanecerLogado: false,
    }

    /* Pegando os valores dos campos dos inputs */
    AttCampos = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    /* Setando state permanecerLogado e exibindo a marcação da opção */
    PermLogado = (idBtn) => {
        this.setState({
            permanecerLogado: !this.state.permanecerLogado,
        }, () => {
            let block = document.getElementById("checkmark " + idBtn);
            if (this.state.permanecerLogado) {
                block.classList.add("perm");
            }
            else {
                block.classList.remove("perm");
            }
        })
    }

    /* Função disparada ao aperta Enter no formulario */
    HandleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.Submit();
        }
    }

    /* Função disparada ao clicar no botao avançar */
    Submit = () => {
        console.log(this.state.usuario);
        console.log(this.state.senha);
        console.log(this.state.permanecerLogado);


        //alerta caso usuario ou senha estiverem errados
        if (true) {
            let alertaInfosErradas = document.getElementById("alerta");
            alertaInfosErradas.classList.add('mostrar');
            alertaInfosErradas.addEventListener('click', (e) => {
                if (e.target.className === 'fecharAlerta') {
                    alertaInfosErradas.classList.remove('mostrar');
                }
            })
        }
    }

    render() {
        return (
            <div className="login-background">
                    <div className="login responsive animation">
                        {/* apresentacao do projeto */}
                        <div className="apresentacao">
                            <img src={LogoOrb} alt="Logo" />
                            <aside id="Aside-login">
                                <div className="infos">
                                    <div className="infos-item">
                                        <Shield fill="#eeeeee" />
                                        <span>plataforma de <b>gestão</b> e <b>acompanhamento</b></span>
                                    </div>
                                    <div className="infos-item">
                                        <Shield fill="#eeeeee" />
                                        <span>exclusivo para <b>aventureiros</b></span>
                                    </div>
                                </div>

                                {/* logo ceos */}
                                <div className="logoCeos">
                                    <img src={ImgCeos} alt="Ceos" />
                                </div>
                            </aside>
                        </div>

                        {/* formulario */}
                        <div className="container-login">
                            
                            <p className="namelogin">login</p>

                            <form className="formlogin" onKeyPress={this.HandleKeyPress}>
                                {/* componentes de input */}
                                <Input name="usuario" label="usuário:" type="text" attcampo={this.AttCampos} />
                                <Input name="senha" label="senha:" type="password" attcampo={this.AttCampos} />

                                {/* checkbox permanecer logado */}
                                <Checkbox name="permanecer logado" id="permanecer_logado" FuncCheckbox={this.PermLogado} margin="5%"/>

                                {/* botao de submit */}
                                <div className="btn-secondary">
                                    <Link to="#" className={this.state.usuario === "" || this.state.senha === "" ? "btn btndesabilitado" : "btn"} onClick={() => this.Submit()} >
                                        <div className="conteudobtn" >
                                            <p>entrar</p>
                                            <Sword fill="#222222" className="img" id="img" />
                                        </div>
                                    </Link>
                                </div>

                                {/* link entrar como admin */}
                                <Link to="#" className="link-admin">entrar como admin</Link>

                                <div id="alerta">
                                    <p>usuário ou senha estão incorretos!</p>
                                    <span className="fecharAlerta">x</span>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Login;