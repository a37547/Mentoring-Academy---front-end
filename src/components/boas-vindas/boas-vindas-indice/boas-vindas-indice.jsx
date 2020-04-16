import React from "react";
import OrlandoRodrigues from "../../../assets/OrlandoRodrigues.png";

const Indice = () => {
  return (
    <section id="indice">
      <div className="features-row section-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="wow fadeInLeft"
                //style="visibility: visible; animation-name: fadeInLeft;"
              >
                <p></p>
                <h3 className="section-title">
                  Bem-vindo ao Instituto Politécnico de Bragança
                </h3>
                <img
                  className="advanced-feature-img-left"
                  src={OrlandoRodrigues}
                  alt=""
                />
                <br />
                <br />
                <p>Caros novos alunos do IPB,</p>
                <br />
                <p>
                  Contamos convosco para fazer do Instituto Politécnico de
                  Bragança uma instituição ainda melhor no ano letivo que agora
                  começa.
                </p>
                <p>
                  Conhecemos o vosso valor, sabemos que tiveram um percurso de
                  sucesso para chegar aqui e estamos muito orgulhosos da escolha
                  que fizeram.
                </p>
                <p>
                  Tudo faremos para que a vossa vida no IPB seja agradável,
                  entusiasmante e inspiradora.
                </p>
                <p>
                  Porque escolheram o Instituto Politécnico de Bragança, sabem
                  certamente que passaram a integrar uma instituição muito
                  especial. O Instituto Politécnico mais prestigiado do País,
                  como todos os rankings internacionais o demonstram, e uma
                  instituição que, em diversas áreas disciplinares, surge entre
                  as melhores do mundo. Este reconhecimento internacional é uma
                  garantia do valor do vosso futuro diploma, de elevada
                  empregabilidade e de valorização pessoal.
                </p>
                <p>
                  Mas o IPB é muito mais do que apenas uma boa escola de
                  formação: é uma instituição que promove a criatividade, a
                  multiculturalidade, a vida saudável, que se preocupa com os
                  seus alunos e que tudo faz para que aqui obtenham uma formação
                  integral. Sobretudo, o IPB é uma comunidade que confia nos
                  seus alunos e que se orgulha deles.
                </p>
                <p>Estamos certos que serão felizes no IPB!</p>
                <p>Bem-vindos!</p>
                <br />
                <p>
                  Orlando Isidoro Afonso Rodrigues
                  <br />
                  Presidente do Instituto Politécnico de Bragança
                </p>
                <p></p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

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
