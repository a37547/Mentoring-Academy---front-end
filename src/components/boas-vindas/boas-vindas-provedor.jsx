import React from "react";
import { Row, Col, ListGroup, Container } from "react-bootstrap";

const Provedor = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Provedor do Estudante</h2>
          <p>
            O Provedor do Estudante goza de total independência no exercício das
            suas funções, desenvolvendo a sua ação em articulação com as
            associações de estudantes e com os órgãos e serviços do Instituto,
            designadamente com as suas Escolas e os respetivos Conselhos
            Pedagógicos.
          </p>
          <ListGroup className="my-4">
            <p>Compete ao Provedor:</p>
            <ListGroup.Item>
              a) apreciar as queixas e reclamações dos estudantes e, caso
              considere que a razão lhes assiste, proferir as recomendações
              pertinentes aos órgãos competentes para as atender;
            </ListGroup.Item>
            <ListGroup.Item>
              b) fazer recomendações tendo em vista acautelar os interesses dos
              estudantes, nomeadamente no domínio da atividade pedagógica e da
              ação social escolar.
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="my-4">
            <p>Provedor do Estudante:</p>
            <ListGroup.Item>Maria Augusta Pereira Mata</ListGroup.Item>
          </ListGroup>
          <ListGroup className="my-4">
            <p>Instalações</p>
            <ListGroup.Item>Gabinete do Provedor do Estudante</ListGroup.Item>
            <ListGroup.Item>Escola Superior de Saúde</ListGroup.Item>
            <ListGroup.Item>
              1.º piso – Ala do Conselho Directivo
            </ListGroup.Item>
          </ListGroup>
          <p>Horário de atendimento </p>
          <ListGroup className="my-4">
            <ListGroup.Item>Segundas e terças-feiras</ListGroup.Item>
            <ListGroup.Item>Manhã: 9:00 – 12:30</ListGroup.Item>
            <ListGroup.Item>Tarde: 14:00 – 17:30</ListGroup.Item>
          </ListGroup>

          <ListGroup className="my-4">
            <p>Contactos</p>
            <ListGroup.Item>Telefone: (+351) 963391043</ListGroup.Item>
            <ListGroup.Item>E-mail: provedordoestudante@ipb.pt</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Provedor;
