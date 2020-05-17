import React from "react";
import logoIPB from "../../../assets/logo_ipb_branco.png";
import students1 from "../../../assets/students1.jpg";
import students2 from "../../../assets/students2.jpg";
import students3 from "../../../assets/students3.jpg";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <Container className="intro-container" fluid>
      <Row className="d-flex justify-content-center">
        <Col xs={12} className="d-flex justify-content-center">
          <img src={logoIPB} alt="" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="d-flex justify-content-center">
          <Button
            variant="hover"
            size="lg"
            className="rounded-pill border my-3"
          >
            Inscrição Workshop Gestão do tempo e organização do trabalho
          </Button>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="d-flex justify-content-center">
          <Link className="text-white" to={"/boasvindas"}>
            <Button size="lg" className="rounded-pill bg-transparent border">
              Guia de Boas-Vindas e Acolhimento aos novos alunos
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="d-flex justify-content-center align-items-end">
          <Image src={students3} alt="" fluid className="d-none d-lg-flex" />
          <Image src={students2} alt="" fluid className="d-none d-md-flex" />
          <Image src={students1} alt="" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
