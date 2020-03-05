export function SetPage(paginaAtual){
    return {
        type: "SET_PAGINAATUAL",
        paginaAtual: paginaAtual,

    }
}

export function SetNumNotificacao(number){
    return {
        type: "SET_NUMBER",
        number,
    }
}