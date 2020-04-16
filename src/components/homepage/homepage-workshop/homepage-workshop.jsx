import React from "react";
import students4 from "../../../assets/students4.jpg";

const Workshop = () => {
  return (
    <section id="workshop">
      <div className="features-row section-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img
                className="advanced-feature-img-right wow fadeInRight"
                src={students4}
                //style="max-width: 585px; max-height: 401px; visibility: visible; animation-name: fadeInRight;"
                alt=""
              />
              <div
                className="wow fadeInLeft"
                //style="visibility: visible; animation-name: fadeInLeft;"
              >
                <p></p>
                <h2>Workshops Mentoring Academy</h2>
                Workshops destinados aos estudantes para o desenvolvimento de
                competências transversais fundamentais para o mercado de
                trabalho (soft skills).<p></p>
                <p></p>
                <h4>Próximos Workshops:</h4>
                <h6>
                  {" "}
                  <i className="ion-android-checkmark-circle"></i> 10/03/2020 -
                  Workshop Gestão do tempo e organização do trabalho - Prof.
                  Doutora Ana Veloso - Universidade do Minho (Vagas esgotadas).
                </h6>
                <p>
                  Inscrições Encerradas. Poderá inscrever-se em uma próxima
                  edição do workshop em:{" "}
                  <a
                    href="http://bit.ly/2Tv5zrY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://bit.ly/2Tv5zrY
                  </a>
                </p>
                <p>
                  Neste workshop orientado para a organização do tempo,
                  realizar-se-á uma análise individual da gestão de vida
                  considerando a perspectiva pessoal (vida privada) e a
                  perspectiva de trabalho (vida profissional). Destinando-se a
                  alunos do ensino superior, o trabalho será operacionalizado
                  pelo estudo. Pretende-se que no final os participantes possam
                  organizar o seu tempo considerando um balanço optimizado entre
                  vida privada e vida profissional (de estudo).
                </p>
                <h4>Objectivos</h4>
                No final desta acção, os formandos serão capazes de:
                <br />
                1. Elaborar objectivos operacionais
                <br />
                2. Elaborar um plano de trabalho (mensal, semanal e diário) em
                função de: tarefas primárias e secundárias e objectivos de
                desempenho traçados.<p></p>
                <p></p>
                <h4>Programa</h4>
                <p>
                  - Análise do trabalho considerando:
                  <br />
                  • tarefas importantes/primárias
                  <br />
                  • tarefas secundárias
                  <br />
                  • tarefas urgentes <br />
                  • tarefas repetidas
                  <br />
                  • tarefas criticas
                  <br />
                  • objectivo da função
                  <br />
                  - Elaboração de objectivos operacionais <br />
                  - Definição do plano de desenvolvimento de competências de
                  apoio à realização de objectivos:
                  <br />
                  • Levantamento de interesses e de competências.
                  <br />
                  - Organização do trabalho
                  <br />
                  • Definir prioridades (vida privada e trabalho)
                  <br />
                  • Definição do plano de trabalho
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
