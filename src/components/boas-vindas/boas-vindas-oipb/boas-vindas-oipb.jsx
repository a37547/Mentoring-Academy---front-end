import React from "react";
import FotoAereaIPB from "../../../assets/FotoAereaIPB.jpg";
import { Row, Col, Image, ListGroup } from "react-bootstrap";

const OIPB = () => {
  return (
    <Row>
      <Col xs={12}>
        <h2>O IPB</h2>
        <p>
          O Instituto Politécnico de Bragança (IPB) (
          <a href="http://www.ipb.pt" target="_blank" rel="noopener noreferrer">
            www.ipb.pt
          </a>
          ) foi criado em 1983. Desde essa data, fruto da contribuição de várias
          gerações de estudantes, colaboradores e docentes e de instituições e
          personalidades externas, muito se construiu nesta instituição em prol
          de um objetivo comum de desenvolvimento regional e nacional. Em mais
          de 36 anos de história, o IPB formou mais de trinta mil diplomados,
          tornando-se num agente fundamental de descentralização e
          democratização do acesso ao ensino superior.
        </p>
        <p>
          Constituído atualmente por cinco Escolas, o IPB cobre assim todo o
          leque de formações e competências técnico-científicas:
        </p>
        <ListGroup>
          <ListGroup.Item>
            <li>
              Escola Superior Agrária (ESA) -{" "}
              <a
                href="http://www.esa.ipb.pt"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.esa.ipb.pt
              </a>
            </li>
          </ListGroup.Item>
          <ListGroup.Item>
            <li>
              Escola Superior de Educação (ESE) -{" "}
              <a
                href="http://www.ese.ipb.pt"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.ese.ipb.pt
              </a>
            </li>
          </ListGroup.Item>
          <ListGroup.Item>
            <li>
              Escola Superior de Tecnologia e de Gestão (ESTiG) -{" "}
              <a
                href="http://www.estig.ipb.pt"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.estig.ipb.pt
              </a>
            </li>
          </ListGroup.Item>
          <ListGroup.Item>
            <li>
              Escola Superior de Comunicação, Administração e Turismo de
              Mirandela (EsACT) -{" "}
              <a
                href="http://www.esact.ipb.pt"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.esact.ipb.pt
              </a>
            </li>
          </ListGroup.Item>
          <ListGroup.Item>
            <li>
              Escola Superior de Saúde de Bragança (ESSa) -{" "}
              <a
                href="http://www.essa.ipb.pt"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.essa.ipb.pt
              </a>
            </li>
          </ListGroup.Item>
        </ListGroup>

        <Image fluid src={FotoAereaIPB} alt="" className="float-right" />
      </Col>
    </Row>
  );
};

export default OIPB;
