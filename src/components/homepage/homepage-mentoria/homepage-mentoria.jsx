import React from "react";
import tutoring1 from "../../../assets/tutoring-1.jpg";
import tutoring2 from "../../../assets/tutoring-2.jpg";

const Mentoria = () => {
  return (
    <section id="mentoria">
      <div className="features-row section-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img
                className="advanced-feature-img-right wow fadeInRight"
                src={tutoring1}
                alt=""
                //style="visibility: visible; animation-name: fadeInRight;"
              />
              <div
                className="wow fadeInLeft"
                //style="visibility: visible; animation-name: fadeInLeft;"
              >
                <h2>PROGRAMA MENTORIAS</h2>
                <p>
                  Destina-se aos estudantes do 1.º ano que ingressam no IPB.
                  É-lhes atribuído um Mentor (estudante do curso no 2.º ou 3.º
                  ano ou mesmo de Mestrado) que o ajuda na integração na
                  academia e na cidade e que o acompanha desde a sua matrícula.
                </p>
                <p>
                  O Mentor dá informações e pode esclarecer dúvidas sobre o
                  funcionamento da escola, do curso, do Instituto Politécnico de
                  Bragança (IPB) e serviços de ação social. Pode ajudar
                  igualmente na integração na cidade e no meio social e
                  cultural.
                </p>
                <p>
                  Também pode aconselhar sobre o seu percurso académico e sobre
                  a eventual necessidade de recorrer ao acompanhamento académico
                  em algumas unidades curriculares do curso, dentro da segunda
                  vertente deste programa.
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
              <img
                className="advanced-feature-img-left"
                src={tutoring2}
                alt=""
              />
              <div
                className="wow fadeInRight"
                //style="visibility: visible; animation-name: fadeInRight;"
              >
                <h2>Quem se pode candidatar a Mentor?</h2>

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
                </ul>

                <p>
                  <a
                    href="http://inqueritos.ipb.pt/?r=survey/index/sid/571475/lang/pt"
                    target="_blank"
                    className="get-started-btn"
                  >
                    Inscrição de Mentores
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentoria;
