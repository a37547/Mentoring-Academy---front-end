import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} className="py-4 border-top">
          <strong>Email:</strong> giape@ipb.pt
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
