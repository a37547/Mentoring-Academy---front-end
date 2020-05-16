import React from "react";
import Header from "./boas-vindas-header/boas-vindas-header";
import "./boas-vindas-header/boas-vindas-header.css";
import Indice from "./boas-vindas-indice/boas-vindas-indice";
import "./boas-vindas-indice/boas-vindas-indice.css";
import OIPB from "./boas-vindas-oipb/boas-vindas-oipb";
import Faq from "./boas-vindas-faq/boas-vindas-faq";
import Capacitacao from "./boas-vindas-capacitacao/boas-vindas-capacitacao";
import Braganca from "./boas-vindas-braganca/boas-vindas-braganca";
import ComoChegar from "./boas-vindas-comochegar/boas-vindas-comochegar";
import Matriculas from "./boas-vindas-matriculas/boas-vindas-matriculas";
import ServicosSociais from "./boas-vindas-servicossociais/boas-vindas-servicossociais";
import Alojamento from "./boas-vindas-alojamento/boas-vindas-alojamento";
import CartaoEstudante from "./boas-vindas-cartaoestudante/boas-vindas-cartaoestudante";
import AssociacoesEstudantes from "./boas-vindas-associacoesestudantes/boas-vindas-associacoesestudantes";
import Provedor from "./boas-vindas-provedor/boas-vindas-provedor";
import AcessoInternet from "./boas-vindas-acessointernet/boas-vindas-acessointernet";
import PlataformasEletronicas from "./boas-vindas-plataformaseletronicas/boas-vindas-plataformaseletronicas";
import Footer from "./boas-vindas-footer/boas-vindas-footer";
import "./boas-vindas-footer/boas-vindas-footer.css";
import Welcome from "./boas-vindas-welcome";

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
