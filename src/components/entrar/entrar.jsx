import React from "react";
import Navbar from "../navbar/navbar";
import "../navbar/navbar.css";
import "./entrar.css";
import { Link } from "react-router-dom";

const Entrar = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="login-form-container">
        <div className="login-form">
          <h5>Entrar</h5>
          <form action="">
            <div className="username">
              <input type="text" placeholder="Username" />
            </div>
            <div className="password">
              <input type="password" placeholder="Palavra-passe" />
            </div>
            <button>Entrar</button>
          </form>
          <h6>
            Não tem uma conta? <Link to="/registar">Registe-se</Link>
          </h6>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Entrar;
