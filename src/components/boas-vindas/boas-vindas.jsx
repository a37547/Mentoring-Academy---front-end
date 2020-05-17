import React from "react";
import Header from "./boas-vindas-header/boas-vindas-header";
import Indice from "./boas-vindas-indice/boas-vindas-indice";
import OIPB from "./boas-vindas-oipb";
import Faq from "./boas-vindas-faq";
import Capacitacao from "./boas-vindas-capacitacao";
import Braganca from "./boas-vindas-braganca";
import ComoChegar from "./boas-vindas-comochegar";
import Matriculas from "./boas-vindas-matriculas";
import ServicosSociais from "./boas-vindas-servicossociais";
import Alojamento from "./boas-vindas-alojamento";
import CartaoEstudante from "./boas-vindas-cartaoestudante";
import AssociacoesEstudantes from "./boas-vindas-associacoesestudantes";
import Provedor from "./boas-vindas-provedor";
import AcessoInternet from "./boas-vindas-acessointernet";
import PlataformasEletronicas from "./boas-vindas-plataformaseletronicas";
import Footer from "./boas-vindas-footer/boas-vindas-footer";
import Welcome from "./boas-vindas-welcome";
import "./boas-vindas-indice/boas-vindas-indice.css";
import "./boas-vindas-header/boas-vindas-header.css";
import "./boas-vindas-footer/boas-vindas-footer.css";

const BoasVindas = () => {
  return (
    <React.Fragment>
      <Header />
      <main id="main">
        <Welcome />
        <Indice />
        <OIPB />
        <Faq />
        <Capacitacao />
        <Braganca />
        <ComoChegar />
        <Matriculas />
        <ServicosSociais />
        <Alojamento />
        <CartaoEstudante />
        <AssociacoesEstudantes />
        <Provedor />
        <AcessoInternet />
        <PlataformasEletronicas />
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default BoasVindas;
