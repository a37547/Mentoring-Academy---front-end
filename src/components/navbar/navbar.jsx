import React from "react";
import logo from "../../assets/logo-mentoring-academy.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="header" className="header-fixed">
      <div className="container">
        <div id="logo" className="pull-left">
          <Link to="/" className="scrollto hide-big-logo">
            <img src={logo} alt="" />
          </Link>
          <a href="#intro">
            <img src="images/logo.png" alt="" title="" />
          </a>
        </div>

        <nav id="nav-menu-container">
          <ul
            className="nav-menu sf-js-enabled sf-arrows"
            //style="touch-action: pan-y;"
          >
            <li>
              <a href="#intro">Início</a>
            </li>
            <li>
              <a href="#about">O Programa</a>
            </li>
            <li>
              <a href="#mentoria">Mentorias</a>
            </li>
            <li>
              <a href="#tutoria">Tutorias</a>
            </li>
            <li>
              <a href="#formacao">Formação Pedagógica</a>
            </li>
            <li>
              <a href="#more-features">Plataforma</a>
            </li>
            <li>
              <a href="#">
                <Link to={"/entrar"}>Entrar/Registar</Link>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
