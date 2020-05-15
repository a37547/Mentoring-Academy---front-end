import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="mt-5 border-top">
      <Row className="py-4">
        <Col xs={12} sm={6} className="text-center text-sm-left">
          <strong>Email:</strong> mentoringacademy@ipb.pt
        </Col>
        <Col xs={12} sm={6} className="text-center text-sm-right">
          Template:{" "}
          <a
            href="https://bootstrapmade.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BootstrapMade
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
