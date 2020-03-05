/*Exemplos de dados estáticos*/
 
//Exemplo de usuário para login
export const usuario = {
  id: 1,
  nome: "Zé",
  usuario: "zezim",
  senha: "123456",
  cargo: "Assessor",
  setor: "Gestão de Pessoas", //Gestão de Pessoas sempre é admin true
  nascimento: "28/12/2000",
  mensagem: "Xablau",
  lenda: "",
  XP: 100,
  disponibilidade: 4,
  descDisponi: "mensagem anexa sobre disponibilidade (opcional)",
  avatar: "https://github.com/GustavoMarks/OrbMockup/blob/master/material/Personagens/A5_128.png?raw=true",
  admin: true,
  comprometimento: 3,
  participacao: 4,
}

//Exemplo de usuários cadastrados
export const usuData = [
  {
    id: 1,
    nome: "Zé",
    usuario: "zezim",
    senha: "123456",
    cargo: "Assessor",
    setor: "Gestão de Pessoas",
    nascimento: "28/12/2000",
    mensagem: "Xablau",
    lenda: "",
    XP: 19245,
    disponibilidade: 4,
    descDisponi: "Oi meu nome é zezim",
    avatar: "https://github.com/GustavoMarks/OrbMockup/blob/master/material/Personagens/A5_128.png?raw=true",
    admin: true,
    comprometimento: 3,
    participacao: 4,
  },
  {
    id: 2,
    nome: "Cicrano",
    usuario: "criano",
    senha: "123456",
    cargo: "Assessor",
    setor: "Projetos",
    nascimento: "29/01/2000",
    mensagem: "Vral",
    lenda: "",
    XP: 20245,
    disponibilidade: 2,
    descDisponi: "Oi meu nome é criano",
    avatar: "https://github.com/GustavoMarks/OrbMockup/blob/master/material/Personagens/A5_128.png?raw=true",
    admin: false,
    comprometimento: 1,
    participacao: 5,
  },
  {
    id: 3,
    nome: "Fulano",
    usuario: "fulanous",
    senha: "123456",
    cargo: "Assessor",
    setor: "Projetos", //Gestão de Pessoas sempre é admin true
    nascimento: "28/01/2000",
    mensagem: "Katchau",
    lenda: "",
    XP: 18245,
    disponibilidade: 2,
    descDisponi: "Oi meu nome é fulanous",
    avatar: "https://github.com/GustavoMarks/OrbMockup/blob/master/material/Personagens/A5_128.png?raw=true",
    admin: false,
    comprometimento: 5,
    participacao: 1,
  }
]

//Exemplo de registros de conquista
export const conquistas = [
  {
    id: 1,
    imagem: '#', //Será url para imagem existente ou gerado por upload
    xp: 800,
    descricao: "Conclusão do Projeto Google",
    data: "28/12/2019",
  },
  {
    id: 2,
    imagem: '#', //Será url para imagem existente ou gerado por upload
    xp: 100,
    descricao: "1 ano de Ceos",
    data: "29/12/2019",
  },
]


export const usuConqData = [
  {
    idUsuario: 1,
    idConquista: 1
  },
  {
    idUsuario: 1,
    idConquista: 2,
  },
  {
    idUsuario: 2,
    idConquista: 1,
  },
  {
    idUsuario: 3,
    idConquista: 2,
  },
];

//Exemplos de notificações
export const notificaceos = [
  {
    id: 1,
    tipo: "Conquista",
    titulo: "Você recebeu uma nova conquista",
    usuarioNotificado: 1,
    referencia: 1,
    data: "29/12/2019",
  },
  {
    id: 2,
    tipo: "Avaliação",
    titulo: "Você tem uma nova avaliação disponível",
    usuarioNotificado: 1,
    referencia: 1,
    data: "29/12/2019",
  },
  {
    id: 3,
    tipo: "Avaliação",
    titulo: "Você tem uma nova avaliação disponível",
    usuarioNotificado: 2,
    referencia: 1,
    data: "29/12/2019",
  },
  {
    id: 4,
    tipo: "Avaliação",
    titulo: "Você tem uma nova avaliação disponível",
    usuarioNotificado: 3,
    referencia: 1,
    data: "29/12/2019",
  },
  {
    id: 5,
    tipo: "Teste",
    titulo: "Você já pode fazer o teste de JavaScript",
    usuarioNotificado: 1,
    referencia: 1,
    data: "29/12/2019",
  }
]

// Exemplo de registros da Ceos
export const ceos = {
  comprometimento: 2.5,
  participacao: 4,
  disponibilidade: 1.2,
  num_membros: 17,
  cluster: 1,  
}

// Exemplo de metas
export const metas = [
  {
    id: 1,
    titulo: "projetos",
    teto: 9,
    concluido: 1,
  },
  {
    id: 2,
    titulo: "faturamento (k)",
    teto: 18.2,
    concluido: 2.4,
  },
  {
    id: 3,
    titulo: "ações compartilhadas",
    teto: 3,
    concluido: 1,
  },
  {
    id: 4,
    titulo: "nps",
    teto: 50,
    concluido: 0,
  },
  {
    id: 5,
    titulo: "projetos de impacto",
    teto: 3,
    concluido: 0,
  },
  {
    id: 6,
    titulo: "alocação em projetos (%)",
    teto: 75,
    concluido: 15,
  },
  {
    id: 7,
    titulo: "participação em eventos (%)",
    teto: 60,
    concluido: 25,
  }
]

//Exemplos de tecnologias cadastradas
export const tecnologias = [
  {
    id: 1,
    titulo: "HTML",
    descricao: "Principal linguagem de marcação para web",
    icone_bronze: "#",
    icone_prata: "#",
    icone_ouro: "#",
    icone_diamante: "#",
    icone_platina: "#",
  },
  {
    id: 2,
    titulo: "CSS",
    descricao: "Linguagem de estilização para web",
    icone_bronze: "#",
    icone_prata: "#",
    icone_ouro: "#",
    icone_diamante: "#",
    icone_platina: "#",
  },
  {
    id: 3,
    titulo: "JavaScript",
    descricao: "Linguagem de programação, usada principalmenete para web",
    icone_bronze: "#",
    icone_prata: "#",
    icone_ouro: "#",
    icone_diamante: "#",
    icone_platina: "#",
  }
]


// Exemplos de porcentagens de tecnologia
export const porc_tecnologias = [
  {
    id: 1,
    tecnologia: 1,
    porc_na: 6,
    porc_bronze: 5,
    porc_prata: 5,
    porc_ouro: 5,
    porc_diamante: 5,
    porc_platina: 76,
  },
  {
    id: 2,
    tecnologia: 2,
    porc_na: 30,
    porc_bronze: 5,
    porc_prata: 5,
    porc_ouro: 7,
    porc_diamante: 53,
    porc_platina: 0,
  },
  {
    id: 3,
    tecnologia: 3,
    porc_na: 3,
    porc_bronze: 1,
    porc_prata: 4,
    porc_ouro: 92,
    porc_diamante: 0,
    porc_platina: 0,
  }
]

export default usuario