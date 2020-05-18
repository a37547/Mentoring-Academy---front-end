import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import "./registar.css";
import { Form, Col, Button } from "react-bootstrap";
import { getGenres, getFirstGenre } from "../../genders";

class Registar extends Component {
  state = {
    user: {
      username: "",
      genre: getFirstGenre().name,
      nacionalidade: "",
      birthdate: "",
      password: "",
    },
    genders: getGenres(),
  };

  handleUsernameChange = (event) => {
    let user = { ...this.state.user };
    user.username = event.target.value;
    this.setState({ user: user });
  };

  handleGenreChange = (event) => {
    let user = { ...this.state.user };
    user.genre = event.target.value;
    this.setState({ user: user });
  };

  handleBirthdateChange = (event) => {
    let user = { ...this.state.user };
    user.birthdate = event.target.value;
    this.setState({ user: user });
  };

  handlePasswordChange = (event) => {
    let user = { ...this.state.user };
    user.password = event.target.value;
    this.setState({ user: user });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.user);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Col xs={12} md={5} className="m-auto">
          <Form className="my-5 border py-4 px-5" onSubmit={this.handleSubmit}>
            <h3 className="text-center my-4">Registo</h3>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                value={this.state.user.username}
                onChange={this.handleUsernameChange}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Género</Form.Label>
              <Form.Control as="select" onChange={this.handleGenreChange}>
                {this.state.genders.map((genre) => (
                  <option key={genre.name}>{genre.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Nacionalidade</Form.Label>
              <Form.Control as="select">
                <option>Brasil</option>
                <option>Portugal</option>
                <option>Rússia</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect3">
              <Form.Label>Data de nascimento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: 18/02/1997"
                value={this.state.user.birthdate}
                onChange={this.handleBirthdateChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Palavra-passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Palavra-passe"
                value={this.state.user.password}
                onChange={this.handlePasswordChange}
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
  }
}

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
