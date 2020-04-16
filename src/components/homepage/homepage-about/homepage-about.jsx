import React from "react";
import about from "../../../assets/about-img.jpg";

const About = () => {
  return (
    <section id="about" className="section-bg">
      <div className="container-fluid">
        <div className="section-header">
          <h3 className="section-title">O Programa Mentoring Academy</h3>
          <span className="section-divider"></span>
          <p className="section-description">
            O Mentoring Academy pretende contribuir para a integração, sucesso
            académico e pessoal dos estudantes do Instituto Politécnico de
            Bragança.
            <br />O programa encontra-se dividido nas vertentes de Mentorias,
            que visa a integração sócio-académica do estudante, as Tutorias de
            acompanhamento pedagógico e a Formação Pedagógica destinada aos
            docentes com vista a aumentar o sucesso académico dos estudantes.
          </p>
          <p>
            <a
              href="boasvindas/index.html"
              target="_blank"
              className="btn-get-started scrollto"
            >
              Guia de Boas-Vindas e Acolhimento aos novos alunos
            </a>
            &nbsp;
          </p>
        </div>

        <div className="row">
          <div
            className="col-lg-6 about-img wow fadeInLeft"
            //style="visibility: visible; animation-name: fadeInLeft;"
          >
            <img src={about} alt="" />
          </div>

          <div
            className="col-lg-6 content wow fadeInRight"
            //style="visibility: visible; animation-name: fadeInRight;"
          >
            <h2>Objetivos</h2>

            <ul>
              <li>
                <i className="ion-android-checkmark-circle"></i>Promover a
                adaptação dos estudantes ao ensino superior e, de modo muito
                particular ao IPB
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>Contribuir para
                a inclusão socio-académica do estudante
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>Orientar para as
                escolhas mais adequadas, identificando os constrangimentos e
                dificuldades que possam colocar em risco o sucesso académico e
                que facilitem a integração dos estudantes
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>Reconhecer e
                contrariar o mais precocemente possível, no percurso académico,
                as situações de insucesso académico
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>Contribuir para
                a promoção da qualidade do ensino e desenvolvimento académico
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>Aumentar o fluxo
                bidirecional de informação entre a academia e os estudantes
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i> Contribuir para
                a igualdade de oportunidades dirigidas aos estudantes
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i> Contribuir para
                a promoção da qualidade do ensino e desenvolvimento académico
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i> Promover a
                formação pedagógica dos docentes e a partilha de boas práticas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
