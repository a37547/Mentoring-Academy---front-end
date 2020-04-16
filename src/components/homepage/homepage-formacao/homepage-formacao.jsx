import React from "react";
import teachers from "../../../assets/teachers.jpg";

const Formacao = () => {
  return (
    <section id="formacao">
      <div className="features-row section-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img
                className="advanced-feature-img-right wow fadeInRight"
                src={teachers}
                // style="max-width: 585px; max-height: 401px; visibility: visible; animation-name: fadeInRight;"
                alt=""
              />
              <div
                className="wow fadeInLeft"
                //style="visibility: visible; animation-name: fadeInLeft;"
              >
                <h2>Formação Pedagógica</h2>
                <ul>
                  <li>
                    A Formação Pedagógica será realizada através de ações de
                    formação e oficinas colaborativas com vista à partilha de
                    boas práticas pedagógicas de implementação de metodologias e
                    tecnologias que promovam o sucesso académico dos estudantes.
                  </li>
                  <li>
                    Inscrições:{" "}
                    <a
                      href="https://doodle.com/poll/f4etdykg2igr9m9t"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://doodle.com/poll/f4etdykg2igr9m9t
                    </a>
                  </li>
                  <a
                    href="https://doodle.com/poll/f4etdykg2igr9m9t"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>Ações Agendadas</li>
                    <li>
                      <i className="ion-android-checkmark-circle"></i>{" "}
                      03/03/2020 - Oficinas Colaborativas - Testes Online –
                      Paulo Alves e João Ribeiro
                    </li>
                    <li>
                      <i className="ion-android-checkmark-circle"></i>{" "}
                      18/03/2020 - Oficinas Colaborativas - Conteúdos Multimédia
                      – Paulo Alves
                    </li>
                    <li>
                      <i className="ion-android-checkmark-circle"></i>{" "}
                      15/04/2020 - Oficinas Colaborativas - Testes Online –
                      Paulo Alves e João Ribeiro
                    </li>
                    <li>
                      <i className="ion-android-checkmark-circle"></i> 5/05/2020
                      - Oficinas Colaborativas - Vídeo – Paulo Alves
                    </li>
                    <li>
                      <i className="ion-android-checkmark-circle"></i>{" "}
                      21/05/2020 - Oficinas Colaborativas - Testes online –
                      Paulo Alves e João Ribeiro
                    </li>
                    <li>
                      <i className="ion-android-checkmark-circle"></i> 2/06/2020
                      - Oficinas Colaborativas - Conteúdos Multimédia – Paulo
                      Alves
                    </li>

                    <li></li>
                    <li>Ações Realizadas</li>
                    <li>
                      <i className="ion-android-checkmark-circle"></i>{" "}
                      29/05/2019 - Seminário Sala de aula Invertida - Alfredo
                      Prieto, Universidade de Alcalá
                    </li>
                    <li>
                      <i className="ion-android-checkmark-circle"></i>{" "}
                      12/06/2019 – Criação de apresentações com impacto I –
                      Jorge Vaz
                    </li>
                    <li>
                      <i className="ion-android-checkmark-circle"></i>{" "}
                      19/06/2019 - Criação de apresentações com impacto II –
                      Jorge Vaz
                    </li>
                    <li>
                      <i className="ion-android-checkmark-circle"></i>{" "}
                      26/06/2019 – O vídeo como ferramenta pedagógica I – Paulo
                      Alves
                    </li>
                    <li>
                      <i className="ion-android-checkmark-circle"></i> 3/07/2019
                      – O vídeo como ferramenta pedagógica II – Paulo Alves
                    </li>
                    <li>
                      <i className="ion-android-checkmark-circle"></i> 3/07/2019
                      – O vídeo como ferramenta pedagógica II – Paulo Alves
                    </li>
                    <li>
                      <i className="ion-android-checkmark-circle"></i> 4/02/2020
                      - Oficinas Colaborativas - Testes Online - Paulo Alves e
                      João Ribeiro
                    </li>
                    <li>
                      <i className="ion-android-checkmark-circle"></i>{" "}
                      19/02/2020 - Oficinas Colaborativas - Vídeo – Paulo Alves
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formacao;
