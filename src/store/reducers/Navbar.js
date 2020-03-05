// pegando a quantidade de notificações iniciais do usuarioNotificado de id === 1
import { notificaceos } from './../../servidor/Dados'
const notifUsuario = notificaceos.filter( (notif) => notif.usuarioNotificado === 1 );

const init = {
    paginaAtual: "/inicio",
    number: notifUsuario.length,
}

export default function Navbar(state = init, action){
    if (action.type === "SET_PAGINAATUAL") {
        return {...state, paginaAtual: action.paginaAtual}
    }
    if (action.type === "SET_NUMBER") {
        return {...state, number: action.number}
    }
    return state;
}