import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Row>
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
  );
};

export default Footer;
