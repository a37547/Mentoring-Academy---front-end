import React from "react";
import logoipb from "../../../assets/logo-ipb.png";
import { Image, Row, Col } from "react-bootstrap";

const Clients = () => {
  return (
    <Row>
      <Col col={12} className="d-flex justify-content-center">
        <Image src={logoipb} alt="" fluid />
      </Col>
    </Row>
  );
};

export default Clients;
