import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import BoasVindas from "./components/boas-vindas/boas-vindas";
import Homepage from "./components/homepage/homepage";
import Entrar from "./components/entrar/entrar";
import Registar from "./components/registar/registar";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/homepage" component={Homepage} />
        <Route path="/boasvindas" component={BoasVindas} />
        <Route path="/entrar" component={Entrar} />
        <Route path="/registar" component={Registar} />
        <Redirect from="/" exact to="/homepage" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
