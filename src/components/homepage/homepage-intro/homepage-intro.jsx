import React from "react";
import logoIPB from "../../../assets/logo_ipb_branco.png";
import students1 from "../../../assets/students1.jpg";
import students2 from "../../../assets/students2.jpg";
import students3 from "../../../assets/students3.jpg";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const Intro = () => {
  return (
    <Container className="intro-container" fluid>
      <Row className="d-flex justify-content-center">
        <Col xs={12} className="d-flex justify-content-center">
          <img src={logoIPB} alt="" />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mb-3">
        <Col xs={9} sm={8} md={7} lg={5} xl={5}>
          <Button target="_blank" className="bg-transparent border w-100 my-3">
            Inscrição Workshop Gestão do tempo e organização do trabalho
          </Button>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mb-3">
        <Col xs={9} sm={8} md={7} lg={5} xl={5}>
          <Button
            to={"/boasvindas"}
            target="_blank"
            className="bg-transparent border w-100"
          >
            Guia de Boas-Vindas e Acolhimento aos novos alunos
          </Button>
        </Col>
      </Row>
      <Row className="mt-3 d-flex justify-content-center">
        <Col className="d-none d-md-flex align-items-end justify-content-end">
          <Image src={students3} alt="" fluid className="image" />
        </Col>
        <Col className="d-none d-md-flex align-items-end justify-content-center">
          <Image src={students2} alt="" fluid />
        </Col>
        <Col className="d-flex align-items-end justify-content-center justify-content-md-start">
          <Image src={students1} alt="" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
