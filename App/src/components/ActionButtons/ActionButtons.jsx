import React from "react";
import { Link } from "react-router-dom";
import Agenda from "../../img/Agenda.png";
import Agendamentos from "../../img/Agendamentos.png";
import "./ActionButtons.css";

const ActionButtons = () => {
  const data = localStorage.getItem("user");
  const auth = JSON.parse(data);

  return (
    <section className="action-buttons">
      <Link to="/Agendar" className="button-link">
        <figure className="button-figure">
          <img src={Agenda} alt="Ícone de agendamento" />
        </figure>
        <div className="button-content">
          <h3>Agendar</h3>
          <p>Agende sua consulta com os profissionais disponíveis na UNA</p>
        </div>
      </Link>

      <Link to="/Agendamentos" className="button-link">
        <figure className="button-figure">
          <img src={Agendamentos} alt="Ícone de agendamentos" />
        </figure>
        <div className="button-content">
          <h3>Meus Agendamentos</h3>
          {auth.user.tipo_usuario === "paciente" ? (
            <p>Confira aqui suas futuras consultas </p>
          ) : (
            <p>Consultas dependentes de confirmação</p>
          )}
        </div>
      </Link>

      {auth.user.tipo_usuario === "paciente" ? (
        <></>
      ) : (
        <Link to="/consultas" className="button-link">
        <figure className="button-figure">
          <img src={Agendamentos} alt="Ícone de agendamentos" />
        </figure>
        <div className="button-content">
          <h3>CONSULTAS </h3>
          <p>Confirme sua agenda de consultas</p>
        </div>
      </Link>
      )}
    </section>
  );
};

export default ActionButtons;
