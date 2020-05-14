import React from "react";
import logo from "../../assets/logo-mentoring-academy.png";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" variant="dark">
      <Navbar.Brand className="logo" href="/">
        Mentoring Academy
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 d-flex text-center justify-content-lg-between">
          <Nav.Link href="#home">O Programa</Nav.Link>
          <Nav.Link href="#link">Mentorias</Nav.Link>
          <Nav.Link href="#link">Tutorias</Nav.Link>
          <Nav.Link href="#link">Formação Pedagógica</Nav.Link>
          <Nav.Link href="#link">Editar Conteúdo</Nav.Link>
          <Nav.Link href="#link">Chat</Nav.Link>
          <Nav.Link href="/entrar">Entrar/Registar</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
