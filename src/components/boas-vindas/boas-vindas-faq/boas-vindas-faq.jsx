import React from "react";

const Faq = () => {
  return (
    <section id="faq">
      <div className="features-row">
        <div className="container">
          <div className="section-header">
            <h4>Composição da presidência do IPB</h4>
          </div>
          <p>
            O Presidente do Instituto Politécnico de Bragança (IPB) é o órgão
            superior de governo e de representação externa do Instituto.
          </p>
          <p>
            O Presidente é coadjuvado por Vice-Presidentes e Pró-Presidentes.
          </p>
          <p>
            O Instituto possui ainda um Administrador do IPB e um Administrador
            dos Serviços de Ação Social.
          </p>
          <br />
          <h5>Presidente</h5>
          Orlando Isidoro Afonso Rodrigues
          <br />
          <br />
          <p></p>
          <h5>Vice-Presidentes</h5>
          Luis Manuel Santos Pais
          <br />
          Albano Agostinho Gomes Alves
          <br />
          Isabel Cristina Fernandes Rodrigues Ferreira
          <br />
          <br />
          <p></p>
          <h5>Pró-Presidentes</h5>
          Anabela Rodrigues Lourenço Martins
          <br />
          Dina da Conceicao Jeronimo Rodrigues Macias
          <br />
          Luis Carlos Magalhaes Pires
          <br />
          Vera Ferro Lebres
          <br />
          <br />
          <p></p>
          <h5>Provedor do Estudante</h5>
          Maria Augusta Pereira Mata
          <br />
          <br />
          <p></p>
          <h5>Administrador</h5>
          Elisabete Vicente Viegas Morgadinho Madeira Camelo
          <br />
          <br />
          <p></p>
          <h5>Administrador dos Serviços de Ação Social</h5>
          Elisabete Vicente Viegas Morgadinho Madeira Camelo
          <br />
          <br />
          <p></p>
          <br />
          <br />
          <h4>Composição das direções das Escolas</h4>
          <ul
            id="faq-list"
            className="wow fadeInUp"
            //style="visibility: hidden; animation-name: none;"
          >
            <li>
              <a data-toggle="collapse" className="collapsed" href="#faq1">
                Escola Superior Agrária
                <i className="ion-android-remove"></i>
              </a>
              <div id="faq1" className="collapse" data-parent="#faq-list">
                <h5>Director</h5>
                Miguel José Rodrigues Vilas Boas
                <br />
                <br />
                <p></p>
                <h5>Subdirectores:</h5>
                António Castro Ribeiro
                <br />
                Pedro Miguel Lopes Bastos
                <br />
                <br />
                <p></p>
              </div>
            </li>
            <li>
              <a data-toggle="collapse" className="collapsed" href="#faq2">
                Escola Superior de Educação
                <i className="ion-android-remove"></i>
              </a>
              <div id="faq2" className="collapse" data-parent="#faq-list">
                <h5>Diretor</h5>
                António Francisco Ribeiro Alves
                <br />
                <br />
                <p></p>
                <h5>Sub-Diretores</h5>
                António José Santos Meireles
                <br />
                Maria Cristina do Espírito Santo Martins
                <br />
                <br />
                <p></p>
              </div>
            </li>

            <li>
              <a data-toggle="collapse" className="collapsed" href="#faq3">
                Escola Superior de Tecnologia e de Gestão
                <i className="ion-android-remove"></i>
              </a>
              <div id="faq3" className="collapse" data-parent="#faq-list">
                <h5>Diretor</h5>
                Nuno Adriano Baptista Ribeiro
                <br />
                <br />
                <p></p>
                <h5>Subdiretores</h5>
                Maria João Tinoco Varanda Pereira
                <br />
                Getúlio Paulo Peixoto Igrejas
                <br />
                <br />
                <p></p>
              </div>
            </li>

            <li>
              <a data-toggle="collapse" href="#faq4" className="collapsed">
                Escola Superior de Comunicação, Administração e Turismo de
                Mirandela<i className="ion-android-remove"></i>
              </a>
              <div id="faq4" className="collapse" data-parent="#faq-list">
                <h5>Director</h5>
                Luís Carlos Magalhães Pires
                <br />
                <br />
                <p></p>
                <h5>Subdirectores</h5>
                António José Gonçalves Mourão
                <br />
                Sónia Paula da Silva Nogueira
                <br />
                <br />
                <p></p>
              </div>
            </li>
            <li>
              <a data-toggle="collapse" href="#faq5" className="collapsed">
                Escola Superior de Saúde de Bragança
                <i className="ion-android-remove"></i>
              </a>
              <div id="faq5" className="collapse" data-parent="#faq-list">
                <h5>Director</h5>
                Adília Maria Pires da Silva Fernandes <br />
                <br />
                <p></p>
                <h5>Subdirectores</h5>
                Carlos Pires Magalhães
                <br />
                Olívia Rodrigues Pereira
                <br />
                <br />
                <p></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
