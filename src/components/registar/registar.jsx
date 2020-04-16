import React from "react";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import "./registar.css";

const Registar = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="register-form-container">
        <div className="register-form">
          <h5>Registar</h5>
          <form action="">
            <div className="name">
              <input type="text" placeholder="Name" />
            </div>
            <div className="email">
              <input type="text" placeholder="Email" />
            </div>
            <div className="password">
              <input type="text" placeholder="Palavra-passe" />
            </div>
            <button>Registar</button>
          </form>
          <h6>
            Já tem uma conta? <Link to="/entrar">Entrar</Link>
          </h6>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Registar;
