import React from "react";
import IPBBranco from "../../../assets/IPB-Branco.png";
import { Row, Col, Image } from "react-bootstrap";
import students1 from "../../../assets/students1.jpg";
import students2 from "../../../assets/students2.jpg";
import students3 from "../../../assets/students3.jpg";

const Header = () => {
  return (
    <React.Fragment>
      <Row className="header">
        <Col xs={12} className="d-flex justify-content-center">
          <a href="#intro">
            <Image src={IPBBranco} alt="IPB" />
          </a>
        </Col>
        <Col xs={12}>
          <div className="text-center">
            <h2>Guia de Boas-Vindas e Acolhimento aos Novos Alunos</h2>
            <p>Instituto Politécnico de Bragança</p>
          </div>
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
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Header;
