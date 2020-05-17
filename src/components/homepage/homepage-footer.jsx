import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="mt-5 border-top">
      <Row className="py-4">
        <Col xs={12} md={6} className="text-center text-md-left">
          <strong>Email:</strong> mentoringacademy@ipb.pt
        </Col>
        <Col xs={12} md={6} className="text-center text-md-right">
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
