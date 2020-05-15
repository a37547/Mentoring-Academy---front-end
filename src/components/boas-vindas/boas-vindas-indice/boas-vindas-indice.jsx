import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";

const Indice = () => {
  return (
    <Row className="d-flex justify-content-center">
      <Col xs={12} sm={10}>
        <h3 className="section-title">Índice</h3>
        <p>
          Este guia pretende sintetizar informação útil para os novos alunos do
          IPB, sendo disponibilizadas ligações para páginas com informação mais
          detalhada.
        </p>
        <ListGroup className="listgroup">
          <ListGroup.Item>
            <a href="#oipb">O IPB</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="#braganca"> A cidade de Bragança</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="#braganca"> A cidade de Mirandela</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="#comochegar">Como chegar</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="#matriculas">Matrículas</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="#servicossociais">Serviços de Ação Social</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="#alojamento">Alojamento</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="#cartaoestudante">Cartão de Estudante do IPB</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="#associacoesestudantes">Associações Estudantis</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="#provedor">Provedor do Estudante</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="#acessointernet">Acesso à Internet e Email</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="#plataformaseletronicas">Plataformas eletrónicas</a>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
};

export default Indice;
