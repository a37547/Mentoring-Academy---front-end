import React from "react";

const MoreFeatures = () => {
  return (
    <section id="more-features" className="section-bg">
      <a href="https://doodle.com/poll/f4etdykg2igr9m9t" target="_blank"></a>
      <div className="container">
        <a href="https://doodle.com/poll/f4etdykg2igr9m9t" target="_blank">
          <div className="section-header">
            <h3 className="section-title">
              Funcionalidades da Plataforma (em desenvolvimento)
            </h3>
            <span className="section-divider"></span>
            <p className="section-description">
              O sistema irá englobar funcionalidades nas perspectivas de tutor,
              mentor, tutorados, mentorados e coordenadores.
            </p>
          </div>
        </a>
        <div className="row">
          <a
            href="https://doodle.com/poll/f4etdykg2igr9m9t"
            target="_blank"
          ></a>
          <div className="col-lg-6">
            <a
              href="https://doodle.com/poll/f4etdykg2igr9m9t"
              target="_blank"
            ></a>
            <div
              className="box wow fadeInLeft"
              //style="visibility: visible; animation-name: fadeInLeft;"
            >
              <a
                href="https://doodle.com/poll/f4etdykg2igr9m9t"
                target="_blank"
              >
                <div className="icon">
                  <i
                    className="ion-ios-color-filter-outline wow fadeInRight"
                    //style="visibility: visible; animation-name: fadeInRight;"
                  ></i>
                </div>
              </a>
              <h4 className="title">
                <a
                  href="https://doodle.com/poll/f4etdykg2igr9m9t"
                  target="_blank"
                ></a>
                <a href="">Conexão entre as partes</a>
              </h4>
              <p className="description">
                Mentores e mentorados assim como tutores e tutorados poderão
                trocar mensagens entre si.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="box wow fadeInLeft"
              //style="visibility: visible; animation-name: fadeInLeft;"
            >
              <div className="icon">
                <i className="ion-ios-stopwatch-outline"></i>
              </div>
              <h4 className="title">
                <a href="">Marcação de reuniões</a>
              </h4>
              <p className="description">
                O sistema permitirá o agendamento de reuniões entre as partes.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="box wow fadeInRight"
              //style="visibility: visible; animation-name: fadeInRight;"
            >
              <div className="icon">
                <i className="ion-ios-bookmarks-outline"></i>
              </div>
              <h4 className="title">
                <a href="">Material de apoio</a>
              </h4>
              <p className="description">
                Mentores e tutores poderão disponibilizar material de apoio aos
                mentorados e tutorados, respectivamente.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="box wow fadeInRight"
              //style="visibility: visible; animation-name: fadeInRight;"
            >
              <div className="icon">
                <i className="ion-social-buffer-outline"></i>
              </div>
              <h4 className="title">
                <a href="">Atividades, palestras e workshops</a>
              </h4>
              <p className="description">
                Serão disponibilizados atividades, palestras e workshops de
                desenvolvimento pessoal e de soft skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreFeatures;
