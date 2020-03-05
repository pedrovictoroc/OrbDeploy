import React from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { SetPage } from './../../../store/actions/Navbar';

import './Navbar.css';

import ImgOrb from './../../Images/Icone256.png'
import LogoCeos from './../../Images/ceos_logo_navbar.png'
import { Sword } from '../../Icons';


const NavbarItem = ({ name, route, page, dispatch, qtdNotificacao }) => {
  return (
    <li className={page === route ? "paginaAtual flex" : "flex"}>
      <Link onClick={() => dispatch(SetPage(route))} to={route}>{name}</Link>
      {qtdNotificacao}
    </li>
  )
}

const Navbar = ({ navbar, dispatch }) => {
  const pathname = window.location.pathname.toLowerCase();
  if (navbar.paginaAtual !== pathname) navbar.paginaAtual = pathname;
  //Em caso de reload de página o estado inicial da página (/inicio) é ignorado e sobreescrito


  //função disparada ao clicar no hamburguer da navbar mobile, mostra e desmostra e ajeita a responsividade
  function toggleNavMobile() {
    let btnsnav = document.getElementById("btns-navmob");
    btnsnav.classList.toggle("show-nav");

    let btnsnavcima = document.getElementById("btns-navcima");
    btnsnavcima.classList.toggle("setheight");
  }


  return (
    <div className="menu">

      {
        navbar.paginaAtual === "/admin" ?
          //navbar Admin
          <>
            <div className="navbar-desktop">
              <nav>
                <Link to="/inicio" onClick={() => dispatch(SetPage("/inicio"))} >
                  <img src={ImgOrb} alt="menu de navegação" height="46px" width="45px" />
                </Link>

                <div className="flex">
                  <NavbarItem name="início" route="/admin" page={navbar.paginaAtual} dispatch={dispatch} />
                  <NavbarItem name="notificações" route="/notificacoes" page={navbar.paginaAtual} dispatch={dispatch} />
                  <NavbarItem name="logs" route="/logs" page={navbar.paginaAtual} dispatch={dispatch} />
                </div>

                <Link>
                  <div className="logout" > 
                    <Sword fill="#33CCFF" /> 
                    <span>sair</span>
                  </div>
                </Link>
              </nav>

            </div>

            {/* navbar mobile admin */}
            <div className="navbar-mobile" id="navbar-mobile">
              <aside className="btns-navcima" id="btns-navcima">
                <input type="checkbox" className="toggler" onClick={() => toggleNavMobile()} />
                <div className="hamburger"><div></div></div>
                <Link className="logoOrb" to="/inicio" onClick={() => dispatch(SetPage("/inicio"))} >
                  <img src={ImgOrb} alt="menu de navegação" height="46px" width="45px" />
                </Link>
              </aside>

              <nav id="btns-navmob">
                <NavbarItem name="início" route="/admin" page={navbar.paginaAtual} dispatch={dispatch} />
                <NavbarItem name="notificações" route="/notificacoes" page={navbar.paginaAtual} dispatch={dispatch} />
                <NavbarItem name="logs" route="/logs" page={navbar.paginaAtual} dispatch={dispatch} />
                <Link>
                  <div className="logout" > 
                    <Sword fill="#33CCFF" /> 
                    <span>sair</span>
                  </div>
                </Link>
              </nav>
            </div>
          </> :
          //navbar normal
          <>
            {/* navbar desktop */}
            <div className="navbar-desktop">
              <nav>
                <Link to="/inicio" onClick={() => dispatch(SetPage("/inicio"))}>
                  <img src={ImgOrb} alt="menu de navegação" height="46px" width="45px" />
                </Link>

                <div className="flex">
                  <NavbarItem name="você" route="/inicio" page={navbar.paginaAtual} dispatch={dispatch} />
                  <NavbarItem name="aventureiros" route="/aventureiros" page={navbar.paginaAtual} dispatch={dispatch} />
                  <NavbarItem name={
                    <div className="flex">
                      <img src={LogoCeos} width="45px" height="45px" alt="logo ceos navbar" />
                      <span style={{ marginLeft: '10px' }}>ceos</span>
                    </div>
                  } route="/ceos" page={navbar.paginaAtual} dispatch={dispatch} />
                  <NavbarItem name="mural" route="/mural" page={navbar.paginaAtual} dispatch={dispatch} />
                  <NavbarItem name="notificações" route="/notificacoes" page={navbar.paginaAtual} dispatch={dispatch} qtdNotificacao={
                    <div className="numNotificacao">
                      {navbar.number}
                    </div>
                  }
                  />
                </div>

                <Link>
                  <div className="logout" > 
                    <Sword fill="#33CCFF" /> 
                    <span>sair</span>
                  </div>
                </Link>
              </nav>

            </div>

            {/* navbar mobile */}
            <div className="navbar-mobile" id="navbar-mobile">
              <aside className="btns-navcima" id="btns-navcima">
                <input type="checkbox" className="toggler" onClick={() => toggleNavMobile()} />
                <div className="hamburger"><div></div></div>
                <Link className="logoOrb" to="/inicio" onClick={() => dispatch(SetPage("/inicio"))} >
                  <img src={ImgOrb} alt="menu de navegação" height="46px" width="45px" />
                </Link>
              </aside>

              <nav id="btns-navmob">
                <NavbarItem name="você" route="/inicio" page={navbar.paginaAtual} dispatch={dispatch} />
                <NavbarItem name="aventureiros" route="/aventureiros" page={navbar.paginaAtual} dispatch={dispatch} />
                <NavbarItem name={
                  <div className="flex">
                    <img src={LogoCeos} width="45px" height="45px" alt="logo ceos navbar" />
                    <span style={{ marginLeft: '10px' }}>ceos</span>
                  </div>
                } route="/ceos" page={navbar.paginaAtual} dispatch={dispatch} />
                <NavbarItem name="mural" route="/mural" page={navbar.paginaAtual} dispatch={dispatch} />
                <NavbarItem name="notificações" route="/notificacoes" page={navbar.paginaAtual} dispatch={dispatch} qtdNotificacao={
                  <div className="numNotificacao">
                    {navbar.number}
                  </div>
                }
                />
                <Link>
                  <div className="logout" > 
                    <Sword fill="#33CCFF" /> 
                    <span>sair</span>
                  </div>
                </Link>
              </nav>
            </div>
          </>
      }

    </div>
  )
}

export default connect(state => ({ navbar: state.Navbar }))(Navbar)