import React from "react";
import Navbar from "../navbar/navbar";
import "../navbar/navbar.css";
import "./entrar.css";
import { Link } from "react-router-dom";
import { Form, Col, Button, Container } from "react-bootstrap";

const Entrar = () => {
  return (
    <Container fluid className="p-0">
      <Navbar />
      <Col xs={12} md={4} className="m-auto">
        <Form className="mt-5 border px-5 py-4">
          <h3 className="text-center my-4">Entrar</h3>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Palavra-passe</Form.Label>
            <Form.Control type="password" placeholder="Palavra-passe" />
          </Form.Group>

          <Button variant="entrar" type="submit" className="text-white">
            Entrar
          </Button>
          <p className="mt-3 text-center">
            Não tem uma conta? <Link to="/registar">Registe-se!</Link>
          </p>
        </Form>
      </Col>
    </Container>
  );
};

export default Entrar;
