const init = {
    userSelecionado: "",
}

export default function Aventureiro(state = init, action){
    if (action.type === "SET_USER") {
        return {...state, userSelecionado: action.userSelecionado}
    }
    return state;
}