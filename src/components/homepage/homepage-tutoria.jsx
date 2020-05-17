import React from "react";
import mentoring1 from "../../assets/mentoring-1.jpg";
import mentoring2 from "../../assets/mentoring-2.jpg";
import { Col, Row, Image, ListGroup, Button, Container } from "react-bootstrap";

const Tutoria = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col sm={12} lg={6} className="d-flex align-items-center">
          <Container>
            <h2 className="text-center">PROGRAMA TUTORIAS POR PARES</h2>
            <p>
              As tutorias (acompanhamento e apoio pedagógico) são desenvolvidas
              com o apoio voluntário de estudantes, docentes no ativo, docentes
              jubilados, alumni e outros colaboradores (Tutores), que reúnam
              condições pedagógicas para apoio a estudantes (Tutorandos) que se
              candidatem voluntariamente à iniciativa.
            </p>
            <p>
              Os tutores apoiam os tutorandos, no sentido de que estes possam
              ultrapassar as suas dificuldades nas Unidades Curriculares (UC),
              aconselhando quanto a métodos de estudo, ajudando com apoio
              pedagógico na resolução de exercícios, problemas ou outras
              atividades realizadas no âmbito das UC em que o tutorando
              apresente maiores dificuldades, de modo a contribuir para o
              sucesso académico e social, aumentar a motivação e diminuir o
              abandono escolar.
            </p>
          </Container>
        </Col>
        <Col sm={12} lg={6} className="d-flex">
          <Image fluid src={mentoring1} alt="" />
        </Col>
      </Row>
      <Row className="d-flex mt-lg-5">
        <Col sm={12} lg={6} className="d-flex">
          <Image fluid src={mentoring2} alt="" />
        </Col>
        <Col sm={12} lg={6} className="d-flex align-items-center mt-4 mt-lg-0">
          <Container>
            <h4 className="text-center">Quem se pode candidatar a Tutor?</h4>
            <ListGroup className="my-4">
              <ListGroup.Item>
                Estudantes do 2.º ano dos CTESP (para tutorias nos CTESP)
              </ListGroup.Item>
              <ListGroup.Item>
                Estudantes do 2.º e 3.º ano da Licenciatura
              </ListGroup.Item>
              <ListGroup.Item>Estudantes de Mestrado</ListGroup.Item>
              <ListGroup.Item>Docentes no ativo ou aposentados</ListGroup.Item>
              <ListGroup.Item>Investigadores</ListGroup.Item>
              <ListGroup.Item>Funcionários</ListGroup.Item>
              <ListGroup.Item>
                Outros membros da comunidade académica
              </ListGroup.Item>
            </ListGroup>

            <Button
              className="w-100"
              to="http://inqueritos.ipb.pt/?r=survey/index/sid/465916/lang/pt"
              target="_blank"
            >
              Inscrição de Tutores
            </Button>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Tutoria;
