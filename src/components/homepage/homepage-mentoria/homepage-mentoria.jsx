import React from "react";
import tutoring1 from "../../../assets/tutoring-1.jpg";
import tutoring2 from "../../../assets/tutoring-2.jpg";
import { Row, Col, Image, ListGroup, Button, Container } from "react-bootstrap";

const Mentoria = () => {
  return (
    <React.Fragment>
      <Row className="my-4">
        <Col
          sm={12}
          lg={6}
          className="d-flex align-items-center justify-content-center"
        >
          <Container>
            <h2>PROGRAMA MENTORIAS</h2>
            <p>
              Destina-se aos estudantes do 1.º ano que ingressam no IPB. É-lhes
              atribuído um Mentor (estudante do curso no 2.º ou 3.º ano ou mesmo
              de Mestrado) que o ajuda na integração na academia e na cidade e
              que o acompanha desde a sua matrícula.
            </p>
            <p>
              O Mentor dá informações e pode esclarecer dúvidas sobre o
              funcionamento da escola, do curso, do Instituto Politécnico de
              Bragança (IPB) e serviços de ação social. Pode ajudar igualmente
              na integração na cidade e no meio social e cultural.
            </p>
            <p>
              Também pode aconselhar sobre o seu percurso académico e sobre a
              eventual necessidade de recorrer ao acompanhamento académico em
              algumas unidades curriculares do curso, dentro da segunda vertente
              deste programa.
            </p>
          </Container>
        </Col>
        <Col sm={12} lg={6}>
          <Image
            fluid
            src={tutoring1}
            alt=""
            className="w-100"
            //style="visibility: visible; animation-name: fadeInRight;"
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={6}>
          <Image fluid src={tutoring2} alt="" className="w-100" />
        </Col>
        <Col className="d-flex align-items-center">
          <Container>
            <h2>Quem se pode candidatar a Mentor?</h2>
            <ListGroup>
              <ListGroup.Item>
                Estudantes do 2.º ano dos CTESP (para tutorias nos CTESP)
              </ListGroup.Item>
              <ListGroup.Item>
                Estudantes do 2.º e 3.º ano da Licenciatura
              </ListGroup.Item>
              <ListGroup.Item>Estudantes de Mestrado</ListGroup.Item>
            </ListGroup>
            <Button to="http://inqueritos.ipb.pt/?r=survey/index/sid/571475/lang/pt">
              Inscrição de Mentores
            </Button>
          </Container>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Mentoria;
