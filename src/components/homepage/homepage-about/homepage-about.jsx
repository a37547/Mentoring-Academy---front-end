import React from "react";
import about from "../../../assets/about-img.jpg";
import { Row, Col, Jumbotron, Image, ListGroup } from "react-bootstrap";

const About = () => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Jumbotron className="text-center">
            <h3>O Programa Mentoring Academy</h3>
            <span></span>
            <p>
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
            </p>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={6} className="d-flex align-items-center">
          <Image src={about} alt="" fluid />
        </Col>
        <Col className="mt-3 text-center" sm={12} lg={6}>
          <h2>Objetivos</h2>
          <ListGroup>
            <ListGroup.Item>
              Promover a adaptação dos estudantes ao ensino superior e, de modo
              muito particular ao IPB
            </ListGroup.Item>
            <ListGroup.Item>
              Contribuir para a inclusão socio-académica do estudante
            </ListGroup.Item>
            <ListGroup.Item>
              Orientar para as escolhas mais adequadas, identificando os
              constrangimentos e dificuldades que possam colocar em risco o
              sucesso académico e que facilitem a integração dos estudantes
            </ListGroup.Item>
            <ListGroup.Item>
              Reconhecer e contrariar o mais precocemente possível, no percurso
              académico, as situações de insucesso académico
            </ListGroup.Item>
            <ListGroup.Item>
              Contribuir para a promoção da qualidade do ensino e
              desenvolvimento académico
            </ListGroup.Item>
            <ListGroup.Item>
              Aumentar o fluxo bidirecional de informação entre a academia e os
              estudantes
            </ListGroup.Item>
            <ListGroup.Item>
              Contribuir para a igualdade de oportunidades dirigidas aos
              estudantes
            </ListGroup.Item>
            <ListGroup.Item>
              Promover a formação pedagógica dos docentes e a partilha de boas
              práticas
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default About;
