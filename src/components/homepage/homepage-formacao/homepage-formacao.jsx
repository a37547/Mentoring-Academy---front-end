import React from "react";
import teachers from "../../../assets/teachers.jpg";
import { Image, Row, Col, ListGroup, Container } from "react-bootstrap";

const Formacao = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={6}>
          <Image fluid src={teachers} alt="" />
        </Col>
        <Col xs={12} lg={6} className="d-flex align-items-center">
          <Container>
            <h2>Formação Pedagógica</h2>
            <p>
              A Formação Pedagógica será realizada através de ações de formação
              e oficinas colaborativas com vista à partilha de boas práticas
              pedagógicas de implementação de metodologias e tecnologias que
              promovam o sucesso académico dos estudantes.
            </p>
            <ListGroup>
              <ListGroup.Item>
                Inscrições:{" "}
                <a
                  href="https://doodle.com/poll/f4etdykg2igr9m9t"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doodle.com/poll/f4etdykg2igr9m9t
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6} className="d-flex align-items-center">
          <Container>
            <a
              href="https://doodle.com/poll/f4etdykg2igr9m9t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListGroup.Item>Ações Agendadas</ListGroup.Item>
              <ListGroup.Item>
                03/03/2020 - Oficinas Colaborativas - Testes Online – Paulo
                Alves e João Ribeiro
              </ListGroup.Item>
              <ListGroup.Item>
                18/03/2020 - Oficinas Colaborativas - Conteúdos Multimédia –
                Paulo Alves
              </ListGroup.Item>
              <ListGroup.Item>
                15/04/2020 - Oficinas Colaborativas - Testes Online – Paulo
                Alves e João Ribeiro
              </ListGroup.Item>
              <ListGroup.Item>
                5/05/2020 - Oficinas Colaborativas - Vídeo – Paulo Alves
              </ListGroup.Item>
              <ListGroup.Item>
                21/05/2020 - Oficinas Colaborativas - Testes online – Paulo
                Alves e João Ribeiro
              </ListGroup.Item>
              <ListGroup.Item>
                2/06/2020 - Oficinas Colaborativas - Conteúdos Multimédia –
                Paulo Alves
              </ListGroup.Item>
            </a>
          </Container>
        </Col>
        <Col xs={12} lg={6} className="d-flex align-items-center">
          <Container>
            <a
              href="https://doodle.com/poll/f4etdykg2igr9m9t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListGroup.Item>Ações Realizadas</ListGroup.Item>
              <ListGroup.Item>
                29/05/2019 - Seminário Sala de aula Invertida - Alfredo Prieto,
                Universidade de Alcalá
              </ListGroup.Item>
              <ListGroup.Item>
                12/06/2019 – Criação de apresentações com impacto I – Jorge Vaz
              </ListGroup.Item>
              <ListGroup.Item>
                19/06/2019 - Criação de apresentações com impacto II – Jorge Vaz
              </ListGroup.Item>
              <ListGroup.Item>
                26/06/2019 – O vídeo como ferramenta pedagógica I – Paulo Alves
              </ListGroup.Item>
              <ListGroup.Item>
                3/07/2019 – O vídeo como ferramenta pedagógica II – Paulo Alves
              </ListGroup.Item>
              <ListGroup.Item>
                3/07/2019 – O vídeo como ferramenta pedagógica II – Paulo Alves
              </ListGroup.Item>
              <ListGroup.Item>
                4/02/2020 - Oficinas Colaborativas - Testes Online - Paulo Alves
                e João Ribeiro
              </ListGroup.Item>
              <ListGroup.Item>
                19/02/2020 - Oficinas Colaborativas - Vídeo – Paulo Alves
              </ListGroup.Item>
            </a>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Formacao;
