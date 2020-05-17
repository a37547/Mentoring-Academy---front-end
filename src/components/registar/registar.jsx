import React from "react";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import "./registar.css";
import { Form, Col, Button } from "react-bootstrap";

const Registar = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Col xs={12} md={5} className="m-auto">
        <Form className="my-5 border py-4 px-5">
          <h3 className="text-center my-4">Registo</h3>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Username" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Género</Form.Label>
            <Form.Control as="select">
              <option>Masculino</option>
              <option>Feminino</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Nacionalidade</Form.Label>
            <Form.Control as="select">
              <option>Brasil</option>
              <option>Portugal</option>
              <option>Rússia</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Curso</Form.Label>
            <Form.Control as="select">
              <option>Engenharia Informática</option>
              <option>Informática de Gestão</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Palavra-passe</Form.Label>
            <Form.Control type="password" placeholder="Palavra-passe" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirmar palavra-passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirmar palavra-passe"
            />
          </Form.Group>

          <Button variant="entrar" type="submit" className="text-white">
            Registar
          </Button>
          <p className="mt-3 text-center">
            Já tem uma conta? <Link to="/entrar">Entrar</Link>
          </p>
        </Form>
      </Col>
    </React.Fragment>
  );
};

export default Registar;

/*
<div className="register-form-container">
        <div className="register-form">
          <h5>Registar</h5>
          <form action="">
            <div className="birthdate">
              <input type="text" placeholder="Data de nascimento" />
            </div>


            <div className="password">
              <input type="password" placeholder="Palavra-passe" />
            </div>
            <div className="confirm-password">
              <input type="password" placeholder="Confirmar palavra-passe" />
            </div>
            <button>Registar</button>
          </form>
          <h6>
            Já tem uma conta? <Link to="/entrar">Entrar</Link>
          </h6>
        </div>
      </div>
*/
