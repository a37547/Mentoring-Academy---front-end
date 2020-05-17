import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const Faq = () => {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <h4 id="title" className="text-center mb-4">
            Composição da presidência do IPB
          </h4>
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
          <h5>Presidente</h5>
          <ListGroup className="my-3">
            <ListGroup.Item>Orlando Isidoro Afonso Rodrigues</ListGroup.Item>
          </ListGroup>
          <h5>Vice-Presidentes</h5>
          <ListGroup className="my-3">
            <ListGroup.Item>Luis Manuel Santos Pais</ListGroup.Item>
            <ListGroup.Item>Albano Agostinho Gomes Alves</ListGroup.Item>
            <ListGroup.Item>
              Isabel Cristina Fernandes Rodrigues Ferreira
            </ListGroup.Item>
          </ListGroup>
          <h5>Pró-Presidentes</h5>
          <ListGroup className="my-3">
            <ListGroup.Item>Anabela Rodrigues Lourenço Martins</ListGroup.Item>
            <ListGroup.Item>
              Dina da Conceicao Jeronimo Rodrigues Macias
            </ListGroup.Item>
            <ListGroup.Item>Luis Carlos Magalhaes Pires</ListGroup.Item>
            <ListGroup.Item>Vera Ferro Lebres</ListGroup.Item>
          </ListGroup>
          <h5>Provedor do Estudante</h5>
          <ListGroup className="my-3">
            <ListGroup.Item>Maria Augusta Pereira Mata</ListGroup.Item>
          </ListGroup>
          <h5>Administrador</h5>
          <ListGroup className="my-3">
            <ListGroup.Item>
              Elisabete Vicente Viegas Morgadinho Madeira Camelo
            </ListGroup.Item>
          </ListGroup>
          <h5>Administrador dos Serviços de Ação Social</h5>
          <ListGroup className="my-3">
            <ListGroup.Item>
              Elisabete Vicente Viegas Morgadinho Madeira Camelo
            </ListGroup.Item>
          </ListGroup>
          <h4>Composição das direções das Escolas</h4>
          <ListGroup className="my-3">
            <ListGroup.Item>
              <li>
                <a data-toggle="collapse" className="collapsed" href="#faq1">
                  Escola Superior Agrária
                  <i className="ion-android-remove"></i>
                </a>
                <div id="faq1" className="collapse" data-parent="#faq-list">
                  <h5>Director</h5>
                  Miguel José Rodrigues Vilas Boas
                  <p></p>
                  <h5>Subdirectores:</h5>
                  António Castro Ribeiro Pedro Miguel Lopes Bastos
                </div>
              </li>
            </ListGroup.Item>
            <ListGroup.Item>
              <li>
                <a data-toggle="collapse" className="collapsed" href="#faq2">
                  Escola Superior de Educação
                  <i className="ion-android-remove"></i>
                </a>
                <div id="faq2" className="collapse" data-parent="#faq-list">
                  <h5>Diretor</h5>
                  António Francisco Ribeiro Alves
                  <h5>Sub-Diretores</h5>
                  António José Santos Meireles Maria Cristina do Espírito Santo
                  Martins
                </div>
              </li>
            </ListGroup.Item>
            <ListGroup.Item>
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
            </ListGroup.Item>
            <ListGroup.Item>
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
            </ListGroup.Item>
            <ListGroup.Item>
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
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
