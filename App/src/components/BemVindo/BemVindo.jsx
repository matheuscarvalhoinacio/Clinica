import React from "react";
import Tela_login from "../../img/Tela_login.png"
import Una from "../../img/Una.png"
import { Link } from "react-router-dom";
import "./BemVindo.css";

const BemVindo = ({ navigateTo }) => {
  return (
    <div className="bemVindo-container">
      <img src={Una} className="Una" />
      <img src={Tela_login} alt="Calendário" className="bemVindo-image" />
      <Link to={"/cadastra"}> 
        <button
          className="bemVindo-registerButton"
          onClick={() => navigateTo("register")}
        >
          Cadastrar-se
        </button>
      </Link>
      <Link to={"/login"} > 
        <button
          className="bemVindo-loginButton"
          onClick={() => navigateTo("login")}
        >
          Já tenho uma conta
        </button>
      </Link>

    </div>
  );
};

export default BemVindo;

