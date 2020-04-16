import React from "react";
import mentoring1 from "../../../assets/mentoring-1.jpg";
import mentoring2 from "../../../assets/mentoring-2.jpg";

const Tutoria = () => {
  return (
    <section id="tutoria">
      <div className="features-row section-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img
                className="advanced-feature-img-right wow fadeInRight"
                src={mentoring1}
                //style="max-width: 585px; max-height: 401px; visibility: visible; animation-name: fadeInRight;"
                alt=""
              />
              <div
                className="wow fadeInLeft"
                //style="visibility: visible; animation-name: fadeInLeft;"
              >
                <h2>PROGRAMA TUTORIAS POR PARES</h2>
                <p>
                  As tutorias (acompanhamento e apoio pedagógico) são
                  desenvolvidas com o apoio voluntário de estudantes, docentes
                  no ativo, docentes jubilados, alumni e outros colaboradores
                  (Tutores), que reúnam condições pedagógicas para apoio a
                  estudantes (Tutorandos) que se candidatem voluntariamente à
                  iniciativa.
                </p>
                <p>
                  Os tutores apoiam os tutorandos, no sentido de que estes
                  possam ultrapassar as suas dificuldades nas Unidades
                  Curriculares (UC), aconselhando quanto a métodos de estudo,
                  ajudando com apoio pedagógico na resolução de exercícios,
                  problemas ou outras atividades realizadas no âmbito das UC em
                  que o tutorando apresente maiores dificuldades, de modo a
                  contribuir para o sucesso académico e social, aumentar a
                  motivação e diminuir o abandono escolar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features-row">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p></p>
              <img
                className="advanced-feature-img-left"
                src={mentoring2}
                //style="max-width: 585px; max-height: 401px;"
                alt=""
              />
              <div
                className="wow fadeInRight"
                //style="visibility: visible; animation-name: fadeInRight;"
              >
                <h2>Quem se pode candidatar a Tutor?</h2>

                <ul>
                  <li>
                    <i className="ion-android-checkmark-circle"></i> Estudantes
                    do 2.º ano dos CTESP (para tutorias nos CTESP)
                  </li>
                  <li>
                    <i className="ion-android-checkmark-circle"></i> Estudantes
                    do 2.º e 3.º ano da Licenciatura
                  </li>
                  <li>
                    <i className="ion-android-checkmark-circle"></i> Estudantes
                    de Mestrado
                  </li>
                  <li>
                    <i className="ion-android-checkmark-circle"></i> Docentes no
                    ativo ou aposentados
                  </li>
                  <li>
                    <i className="ion-android-checkmark-circle"></i>{" "}
                    Investigadores
                  </li>
                  <li>
                    <i className="ion-android-checkmark-circle"></i>{" "}
                    Funcionários
                  </li>
                  <li>
                    <i className="ion-android-checkmark-circle"></i> Outros
                    membros da comunidade académica
                  </li>
                </ul>
              </div>
              <p>
                <a
                  href="http://inqueritos.ipb.pt/?r=survey/index/sid/465916/lang/pt"
                  target="_blank"
                  className="get-started-btn"
                  rel="noopener noreferrer"
                >
                  Inscrição de Tutores
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutoria;
