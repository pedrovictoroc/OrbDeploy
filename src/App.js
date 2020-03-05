import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Admin from './componentes/Pages/Admin/Admin';
import GerenciarMembros from './componentes/Pages/Admin/GerenciarMembros/GerenciarMembros';
import GestaoAVista from './componentes/Pages/Admin/GestaoAVista/GestaoAVista';
import NovaTarefa from './componentes/Pages/Admin/GestaoAVista/NovaTarefa/NovaTarefa';
import Participacao from './componentes/Pages/Admin/Participacao/Participacao';
import NovaParticipacao from './componentes/Pages/Admin/Participacao/NovaParticipacao/NovaParticipacao';
import CeosAdmin from './componentes/Pages/Admin/Ceos/Ceos';
import AttMeta from './componentes/Pages/Admin/Ceos/AttMeta/AttMeta';
import NovaMeta from './componentes/Pages/Admin/Ceos/NovaMeta/NovaMeta';
import Conquistas from './componentes/Pages/Admin/Conquistas/Conquistas';
import NovaConquista from './componentes/Pages/Admin/Conquistas/NovaConquista/NovaConquista';


import Login from "./componentes/Pages/Login/Login"
import Inicial from "./componentes/Pages/Inicial/Inicial"
import Notificacoes from './componentes/Pages/Notificacoes/Notificacoes';
import Aventureiros from './componentes/Pages/Aventureiros/Aventureiros';
import DetalheAventureiro from './componentes/Pages/Aventureiros/DetalheAventureiro/DetalheAventureiro';
import DetalheComprometimento from './componentes/Pages/Aventureiros/DetalheAventureiro/Comprometimento/Comprometimento';
import DetalheParticipacao from './componentes/Pages/Aventureiros/DetalheAventureiro/Participacao/Participacao';
import DetalheEstatisticas from './componentes/Pages/Aventureiros/DetalheAventureiro/Estatisticas/Estatisticas';
import Mural from './componentes/Pages/Mural/Mural';
import Ceos from './componentes/Pages/Ceos/Ceos';


import Navbar from './componentes/Components/Navbar/Navbar'

import './App.css';


//App renderiza componente de endereçamento em um container responsivo com footer
const App = () => {  
  const pathname = window.location.pathname.toLowerCase();
  return (
    <BrowserRouter>
      <div id="Container">
        {
          pathname === "/" || pathname === "/login" ? (null) : <Navbar/>
        }

        <Switch>
          <Route exact path={"/"} component={Login} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/inicio"} component={Inicial} />
          <Route exact path={"/notificacoes"} component={Notificacoes} />
          <Route exact path={"/aventureiros"} component={Aventureiros} />
          <Route exact path={"/aventureiros/detalhe-aventureiro"} component={DetalheAventureiro} />
          <Route exact path={"/aventureiros/detalhe-aventureiro/comprometimento"} component={DetalheComprometimento} />
          <Route exact path={"/aventureiros/detalhe-aventureiro/participacao"} component={DetalheParticipacao} />
          <Route exact path={"/aventureiros/detalhe-aventureiro/estatisticas"} component={DetalheEstatisticas} />
          <Route exact path={"/mural"} component={Mural} />
          <Route exact path={"/ceos"} component={Ceos} />

          <Route exact path={"/admin"} component={Admin} />
          <Route exact path={"/admin/gerenciar-membros"} component={GerenciarMembros} />
          <Route exact path={"/admin/participacao"} component={Participacao} />
          <Route exact path={"/admin/participacao/nova-participacao"} component={NovaParticipacao} />
          <Route exact path={"/admin/gestao-a-vista"} component={GestaoAVista} />
          <Route exact path={"/admin/gestao-a-vista/nova-tarefa"} component={NovaTarefa} />
          <Route exact path={"/admin/ceos"} component={CeosAdmin} />
          <Route exact path={"/admin/ceos/att-meta"} component={AttMeta} />
          <Route exact path={"/admin/ceos/nova-meta"} component={NovaMeta} />
          <Route exact path={"/admin/conquistas"} component={Conquistas} />
          <Route exact path={"/admin/conquistas/nova-conquista"} component={NovaConquista} />
          
          
        </Switch>
        <footer>
          <a href="http://www.ceos.ufc.br/">CEOS</a> - <span>2020 v1.0</span>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App;