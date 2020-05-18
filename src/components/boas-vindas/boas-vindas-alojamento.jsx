import React from "react";
import { Jumbotron, Col, Row, ListGroup } from "react-bootstrap";

const Alojamento = () => {
  return (
    <Jumbotron>
      <Row className="d-flex justify-content-center">
        <Col xs={12} sm={10}>
          <h2>Alojamento</h2>
          <h4>Como procurar quarto para arrendar</h4>
          <p>
            Podes consultar os anúncios afixados na zona envolvente às
            matrículas.
          </p>
          <p>
            Procurar por anúncios em sites de classificados:
            <ListGroup className="my-4">
              <ListGroup.Item>
                <a href="www.olx.pt" target="_blank" rel="noopener noreferrer">
                  www.olx.pt
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  href="www.custojusto.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.custojusto.pt
                </a>
              </ListGroup.Item>
            </ListGroup>
          </p>
          <h5>Consultar os anúncios nos grupos do Facebook</h5>
          <h6>Bragança:</h6>
          <ListGroup className="my-4">
            <ListGroup.Item>
              Arrendar Quarto/Casa em Bragança:{" "}
              <a
                href="https://www.facebook.com/groups/679998705398883/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/groups/679998705398883/
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              Casas / Apartamentos / Quartos para arrendar em Bragança:{" "}
              <a
                href="https://www.facebook.com/groups/825421167559767/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/groups/825421167559767/
              </a>
            </ListGroup.Item>
          </ListGroup>
          <h6>Mirandela:</h6>
          <ListGroup className="my-4">
            <ListGroup>
              <ListGroup.Item>
                Arrendar quartos em Mirandela (
                <a
                  href="https://www.facebook.com/Arrendar-quartos-em-Mirandela-781190408633364/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/Arrendar-quartos-em-Mirandela-781190408633364/
                </a>
                )
              </ListGroup.Item>
              <ListGroup.Item>
                Procurar Casa em Mirandela:{" "}
                <a
                  href="https://www.facebook.com/groups/217095715073135/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/groups/217095715073135/
                </a>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup>
          <h5>Imobiliárias em Bragança:</h5>
          <p>Podes em alternativa contatar as agências imobiliárias.</p>
          <ListGroup className="my-4">
            <ListGroup.Item>
              Predial Imonorte: Telm: 936 736 066, email:
              geral@predialimonorte.pt
            </ListGroup.Item>
            <ListGroup.Item>
              Visão Geral: Telm: 919993419, email:
              visaogeralimobiliaria@gmail.com
            </ListGroup.Item>
            <ListGroup.Item>
              Predidomus: Telm: 919 703 583, email: geral@predidomus.pt
            </ListGroup.Item>
          </ListGroup>
          <h5>Imobiliárias em Mirandela:</h5>
          <ListGroup className="my-4">
            <ListGroup.Item>
              Imobiliária Miradelense: telm: 919 248 210, email:
              imobmirandelense@sapo.pt
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default Alojamento;
