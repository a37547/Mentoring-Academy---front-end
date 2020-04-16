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
            <div className="username">
              <input type="text" placeholder="Username" />
            </div>
            <div className="gender">
              <select name="" id="">
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </select>
            </div>
            <div className="birthdate">
              <input type="text" placeholder="Data de nascimento" />
            </div>
            <div className="nationality">
              <select name="" id="">
                <option value="Brasil">Brasil</option>
                <option value="Portugal">Portugal</option>
                <option value="Rússia">Rússia</option>
              </select>
            </div>
            <div className="course">
              <select name="" id="">
                <option value="Selecionar Curso">Selecionar Curso</option>
                <option value="Engenharia Informática">
                  Engenharia Informática
                </option>
                <option value="Engenharia Cívil">Engenharia Cívil</option>
                <option value="Informática de Gestão">
                  Informática de Gestão
                </option>
              </select>
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
    </React.Fragment>
  );
};

export default Registar;
