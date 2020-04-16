import React from "react";
import mapa_braganca from "../../../assets/mapa_braganca.png";
import mapa_campus from "../../../assets/mapa_campus.png";

const ComoChegar = () => {
  return (
    <section id="comochegar">
      <div className="features-row">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p></p>
              <img
                className="advanced-feature-img-right wow fadeInRight"
                src={mapa_braganca}
                alt=""
                //style="visibility: hidden; animation-name: none;"
              />
              <div
                className="wow fadeInLeft"
                //style="visibility: hidden; animation-name: none;"
              >
                <p></p>
                <h2>Como chegar</h2>
                <p>
                  {" "}
                  Bragança dispõe de bons acessos por estrada a todos os
                  destinos de norte a sul do país, assim como da Europa. O
                  acesso faz-se pela A4, IP2 e N103, articulando-se estes com
                  outros eixos rodoviários principais.
                </p>
                <p>
                  {" "}
                  O IPB possui um moderno campus junto ao centro da cidade de
                  Bragança (campus de Santa Apolónia, Alameda de Santa Apolónia
                  5300-253 Bragança), onde se situam as escolas: Escola Superior
                  Agrária, Escola Superior de Educação e Escola Superior de
                  Tecnologia e de Gestão e também os Serviços Centrais e os
                  Serviços de Ação Social.
                </p>

                <p>
                  A Escola Superior de Saúde de Bragança situa-se junto ao
                  Hospital de Bragança, a cerca de 600 m do Campus do IPB.
                </p>

                <p>
                  A Escola Superior de Comunicação, Administração e Turismo de
                  Mirandela situa-se na cidade de Mirandela (Campus do Cruzeiro
                  - Avenida 25 de Abril) a cerca de 60 km de Bragança.
                </p>

                <h4>Transporte rodoviário (Bragança e Mirandela)</h4>
                <p>Verifica os circuitos e horários das seguintes empresas:</p>
                <ul>
                  <li>
                    <i className="ion-android-checkmark-circle"></i> Rede
                    Expressos:{" "}
                    <a
                      href="https://www.rede-expressos.pt"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      rede-expressos.pt
                    </a>
                  </li>
                  <li>
                    <i className="ion-android-checkmark-circle"></i>{" "}
                    Santos/Rodonorte:{" "}
                    <a
                      href="https://www.santosviagensturismo.pt"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.santosviagensturismo.pt
                    </a>
                  </li>
                  <p></p>
                  <h5>Estação Rodoviária de Bragança</h5>
                  <p>Av. João da Cruz, 5300-141 Bragança</p>
                  <p>
                    {" "}
                    Existe uma paragem em frente à residência do IPB em Bragança
                    (entrada norte do campus). É recomendado solicitar ao
                    motorista antes de chegar a Bragança que pare na paragem do
                    IPB. A última paragem é na estação rodoviária, no centro da
                    cidade. A paragem em frente ao IPB é só para chegadas, as
                    partidas são sempre da estação rodoviária
                  </p>
                  <h5>Central de Camionagem de Mirandela</h5>
                  R. Dom Afonso III 278, 5370-408 Mirandela
                  <p></p>
                  <h5>Transportes Urbanos em Bragança - STUB</h5>
                  <p>
                    O serviço de transportes públicos da cidade é o STUB
                    (autocarros de cor amarela). Possui uma rede que cobre uma
                    grande parte da cidade (linha urbana), assim como as aldeias
                    do concelho. Podes consultar os horários e outras
                    informações na página:
                  </p>
                  <p>
                    {" "}
                    <a
                      href="https://www.cm-braganca.pt/pages/114"
                      target="_blank"
                      className="get-started-btn"
                      rel="noopener noreferrer"
                    >
                      Horários dos STUB
                    </a>
                  </p>
                  <h5>Táxis</h5>
                  <h6>Praças de táxi na cidade de Bragança:</h6>
                  <p>
                    Av. João Cruz - Tel: 273 322 138
                    <br />
                    Estação Rodoviária - Tel: 273 322 007
                  </p>
                  <h6>Praça de táxi na cidade de Mirandela:</h6>
                  Parque do Império - Tel: 808 200 262
                  <p></p>
                  <h5> Mapa do Campus do IPB </h5>
                  <img
                    className="advanced-feature-img-right wow fadeInRight"
                    src={mapa_campus}
                    alt=""
                    //style="visibility: hidden; animation-name: none;"
                  />
                  <p>
                    <a
                      href="mapa_ipb.pdf"
                      target="_blank"
                      className="get-started-btn"
                      rel="noopener noreferrer"
                    >
                      Download do mapa
                    </a>
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoChegar;
