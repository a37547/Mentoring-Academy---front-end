import React from "react";

const Indice = () => {
  return (
    <section id="indice">
      <div className="features-row">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="wow fadeInLeft"
                //style="visibility: hidden; animation-name: none;"
              >
                <p></p>
                <br />
                <h3 className="section-title">Índice</h3>
                <p>
                  Este guia pretende sintetizar informação útil para os novos
                  alunos do IPB, sendo disponibilizadas ligações para páginas
                  com informação mais detalhada.
                </p>
                <ul>
                  <li>
                    <a href="#oipb">O IPB</a>
                  </li>
                  <li>
                    <a href="#braganca"> A cidade de Bragança</a>
                  </li>
                  <li>
                    <a href="#braganca"> A cidade de Mirandela</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#comochegar">Como chegar</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#matriculas">Matrículas</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#servicossociais">Serviços de Ação Social</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#alojamento">Alojamento</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#cartaoestudante">Cartão de Estudante do IPB</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#associacoesestudantes">Associações Estudantis</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#provedor">Provedor do Estudante</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#acessointernet">Acesso à Internet e Email</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#plataformaseletronicas">
                      Plataformas eletrónicas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Indice;
