import React from "react";
import braganca from "../../../assets/braganca.jpg";
import mirandela from "../../../assets/mirandela.jpg";
import { Row, Image, Col, ListGroup } from "react-bootstrap";

const Braganca = () => {
  return (
    <React.Fragment>
      <Row className="d-flex align-items-center">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <Image fluid src={braganca} alt="" />
        </Col>
        <Col xs={12} md={6}>
          <h2>A cidade de Bragança</h2>

          <p>
            Em Bragança, existe uma vasta oferta cultural onde a arquitetura
            contemporânea convive com manifestações culturais ancestrais, como
            os desfiles de caretos e os museus expõem tanto a herança
            etnográfica da região como as últimas criações de artistas
            consagrados.
          </p>
          <p>
            Os novos alunos do IPB recebem no ato matrícula, por gentiliza do
            Município de Bragança, do Exército Português e da Direção Geral da
            Cultura do Norte, um Bilhete Único que lhe dá acesso às principais
            infraestruturas culturais de Bragança e que poderão usar desde a
            chegada até ao final do ano.
          </p>
          <p>
            Para conhecer a cultura, patrímónio e natureza da cidade de Bragança
            consultar a seguinte página:
          </p>
          <p>
            <a
              href="https://www.cm-braganca.pt/pages/302"
              target="_blank"
              className="get-started-btn"
              rel="noopener noreferrer"
            >
              Mais informação sobre Bragança
            </a>
          </p>
        </Col>
      </Row>
      <Row className="d-flex align-items-center">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <Image fluid src={mirandela} alt="" />
        </Col>
        <Col xs={12} md={6}>
          <h2>A cidade de Mirandela</h2>
          <p>
            A história de Mirandela fica marcada quando a 25 de Maio de 1250,
            através do foral dado por El-Rei D. Afonso III, foi criado o
            concelho de Mirandela; poucos anos depois, por Carta de
            transferências passada por El-Rei D. Dinis, em 2 de Setembro de
            1282.
          </p>
          <p>
            Existe, em todo o concelho, um vasto património arqueológico,
            arquitetónico, histórico e religioso. São exemplo disso, os
            vestígios de povoamento pré-histórico, exemplificado nos diversos
            monumentos megalíticos e castros, alguns reveladores da imensa
            atividade mineira de exploração de cobre, arsénio e ouro, praticada
            pelos povos da idade do bronze e perpetuada pelos romanos que
            deixaram também marcas da sua ocupação na região. São também exemplo
            os pelourinhos, as pontes, as igrejas e os monumentos históricos.
          </p>
          <p>
            <a
              href="http://www.visitmirandela.com/pages/1003"
              target="_blank"
              className="get-started-btn"
              rel="noopener noreferrer"
            >
              Mais informação sobre Mirandela
            </a>
          </p>
          <p>O IPB está ainda presente em:</p>
          <ListGroup>
            <ListGroup.Item>
              <li>
                <i className="ion-android-checkmark-circle"></i>
                <a
                  href="https://www.mogadouro.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mogadouro
                </a>
              </li>
            </ListGroup.Item>
            <ListGroup.Item>
              <li>
                <i className="ion-android-checkmark-circle"></i>
                <a
                  href="https://www.cm-carrazedadeansiaes.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Carrazeda de Ansiães
                </a>
              </li>
            </ListGroup.Item>
            <ListGroup.Item>
              <li>
                <i className="ion-android-checkmark-circle"></i>
                <a
                  href="https://www.cm-macedodecavaleiros.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Macedo de Cavaleiros
                </a>
              </li>
            </ListGroup.Item>
            <ListGroup.Item>
              <li>
                <i className="ion-android-checkmark-circle"></i>
                <a
                  href="http://www.cm-moncorvo.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Torre de Moncorvo
                </a>
              </li>
            </ListGroup.Item>
            <ListGroup.Item>
              <li>
                <i className="ion-android-checkmark-circle"></i>
                <a
                  href="https://valpacos.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Valpaços
                </a>
              </li>
            </ListGroup.Item>
            <ListGroup.Item>
              <li>
                <i className="ion-android-checkmark-circle"></i>
                <a
                  href="https://www.chaves.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chaves
                </a>
              </li>
            </ListGroup.Item>
            <ListGroup.Item>
              <li>
                <i className="ion-android-checkmark-circle"></i>
                <a
                  href="https://www.cm-vnfamalicao.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vila Nova de Famalicão
                </a>
              </li>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Braganca;
