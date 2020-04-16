import React from "react";
import braganca from "../../../assets/braganca.jpg";
import mirandela from "../../../assets/mirandela.jpg";

const Braganca = () => {
  return (
    <section id="braganca">
      <div className="features-row section-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="wow fadeInLeft"
                //style="visibility: hidden; animation-name: none;"
              >
                <p></p>
                <img
                  className="advanced-feature-img-left"
                  src={braganca}
                  alt=""
                />
                <p></p>
                <h2>A cidade de Bragança</h2>

                <p>
                  Em Bragança, existe uma vasta oferta cultural onde a
                  arquitetura contemporânea convive com manifestações culturais
                  ancestrais, como os desfiles de caretos e os museus expõem
                  tanto a herança etnográfica da região como as últimas criações
                  de artistas consagrados.
                </p>
                <p>
                  Os novos alunos do IPB recebem no ato matrícula, por gentiliza
                  do Município de Bragança, do Exército Português e da Direção
                  Geral da Cultura do Norte, um Bilhete Único que lhe dá acesso
                  às principais infraestruturas culturais de Bragança e que
                  poderão usar desde a chegada até ao final do ano.
                </p>
                <p>
                  Para conhecer a cultura, patrímónio e natureza da cidade de
                  Bragança consultar a seguinte página:
                </p>
                <p>
                  {" "}
                  <a
                    href="https://www.cm-braganca.pt/pages/302"
                    target="_blank"
                    className="get-started-btn"
                  >
                    Mais informação sobre Bragança
                  </a>
                </p>
                <p></p>
                <img
                  className="advanced-feature-img-right"
                  src={mirandela}
                  alt=""
                />
                <p></p>

                <h2>A cidade de Mirandela</h2>
                <p>
                  A história de Mirandela fica marcada quando a 25 de Maio de
                  1250, através do foral dado por El-Rei D. Afonso III, foi
                  criado o concelho de Mirandela; poucos anos depois, por Carta
                  de transferências passada por El-Rei D. Dinis, em 2 de
                  Setembro de 1282.
                </p>
                <p>
                  Existe, em todo o concelho, um vasto património arqueológico,
                  arquitetónico, histórico e religioso. São exemplo disso, os
                  vestígios de povoamento pré-histórico, exemplificado nos
                  diversos monumentos megalíticos e castros, alguns reveladores
                  da imensa atividade mineira de exploração de cobre, arsénio e
                  ouro, praticada pelos povos da idade do bronze e perpetuada
                  pelos romanos que deixaram também marcas da sua ocupação na
                  região. São também exemplo os pelourinhos, as pontes, as
                  igrejas e os monumentos históricos.
                </p>
                <p>
                  {" "}
                  <a
                    href="http://www.visitmirandela.com/pages/1003"
                    target="_blank"
                    className="get-started-btn"
                  >
                    Mais informação sobre Mirandela
                  </a>
                </p>
                <br />
                <p>O IPB está ainda presente em:</p>
                <ul>
                  <li>
                    <i className="ion-android-checkmark-circle"></i>
                    <a href="https://www.mogadouro.pt/" target="_blank">
                      Mogadouro
                    </a>
                  </li>
                  <li>
                    <i className="ion-android-checkmark-circle"></i>
                    <a
                      href="https://www.cm-carrazedadeansiaes.pt/"
                      target="_blank"
                    >
                      Carrazeda de Ansiães
                    </a>
                  </li>
                  <li>
                    <i className="ion-android-checkmark-circle"></i>
                    <a
                      href="https://www.cm-macedodecavaleiros.pt/"
                      target="_blank"
                    >
                      Macedo de Cavaleiros
                    </a>
                  </li>
                  <li>
                    <i className="ion-android-checkmark-circle"></i>
                    <a href="http://www.cm-moncorvo.pt/" target="_blank">
                      Torre de Moncorvo
                    </a>
                  </li>
                  <li>
                    <i className="ion-android-checkmark-circle"></i>
                    <a href="https://valpacos.pt/" target="_blank">
                      Valpaços
                    </a>
                  </li>
                  <li>
                    <i className="ion-android-checkmark-circle"></i>
                    <a href="https://www.chaves.pt/" target="_blank">
                      Chaves
                    </a>
                  </li>
                  <li>
                    <i className="ion-android-checkmark-circle"></i>
                    <a href="https://www.cm-vnfamalicao.pt/" target="_blank">
                      Vila Nova de Famalicão
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

export default Braganca;
