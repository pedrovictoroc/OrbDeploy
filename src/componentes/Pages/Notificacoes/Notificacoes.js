import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { SetNumNotificacao } from './../../../store/actions/Navbar';

import './Notificacoes.css'

import BtnPrimario from '../../Components/BtnPrimario/BtnPrimario'
import BtnDetalhes from '../../Components/BtnDetalhes/BtnDetalhes'

import { notificaceos } from './../../../servidor/Dados'

//baseado no usuarioNotificado de id === 1
function Notificacoes() {
    const [notificacoesUsu, setNotificacoesUsu] = useState(notificaceos.filter((notif) => notif.usuarioNotificado === 1));
    const qtdNotif = useSelector(state => state.Navbar.number);
    const dispatch = useDispatch();
    
    //funçao para remover uma notificação
    const removeNotif = (notif) => {
        
        //removendo a notif do array de notificações do usuario
        let index = notificacoesUsu.indexOf(notif);
        const newArrayNotif = notificacoesUsu;
        newArrayNotif.splice(index, 1);
        setNotificacoesUsu( [...newArrayNotif] );

        //setando o novo numero de notificação que aparece na navbar
        dispatch(SetNumNotificacao(qtdNotif - 1))
    }

    // componentes dos  tipos de notificações
    const NotifConquista = ({ notif }) => {
        return (
            <div className="btns">
                <BtnDetalhes />
                <p className="btnX" onClick={() => removeNotif(notif)}>X</p>
            </div>
        )
    }
    const NotifTeste = ({ notif }) => {
        return (
            <div className="btns">
                <BtnPrimario texto="realizar agora" width="270px" />
                <p className="btnX" onClick={() => removeNotif(notif)}>X</p>
            </div>
        )
    }
    const NotifAvaliacao = ({ notif }) => {
        return (
            <div className="btns">
                <BtnPrimario texto="realizar agora" width="270px" />
                <p className="btnX Xdesabilitado">X</p>
            </div>
        )
    }

    return (
        <div className="background">
            <div className="notificacoes responsive animation">
                {notificacoesUsu.map((notificacao) => {
                    return (
                        <div key={notificacao.id} className="notif">
                            <p>{notificacao.titulo}</p>
                            {
                                notificacao.tipo === "Avaliação" ?
                                    <NotifAvaliacao notif={notificacao} /> :
                                    notificacao.tipo === "Teste" ?
                                        <NotifTeste notif={notificacao} /> :
                                        notificacao.tipo === "Conquista" ?
                                            <NotifConquista notif={notificacao} /> : ""
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Notificacoes