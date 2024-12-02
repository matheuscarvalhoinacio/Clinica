import React, { useState, useEffect } from "react";
import "./MeusAgendamentos.css";
import axios from "../../utils/axios";
import icons from "../../img/AgendaCliente.png";

const Agendamentos = () => {
  const [agendamentos, setAgendamentos] = useState([]);

  const getHistorico = async () => {
    try {
      const response = await axios.get("/api/getUserConfirmado");
      setAgendamentos(response.data);
      console.log(agendamentos);
    } catch (error) {
      console.error("Erro ao buscar histórico", error);
    }
  };

  useEffect(() => {
    getHistorico();
  }, []);

  const formatarData = (data) => {
    const date = new Date(data);
    return date.toLocaleDateString("pt-BR");
  };

  const cancelarAgendamento = async (id) => {
    try {
      const response = await axios.delete(`/api/delAgenda/${id}`); 
  
      if (response.status === 200) {
        alert("Agendamento cancelado com sucesso!");
        getHistorico();
      }
    } catch (error) {
      console.error("Erro ao cancelar agendamento", error);
      alert("Erro ao cancelar agendamento");
    }
  };
  

  return (
    <div className="meus-agendamentos">
      <header className="header">
        <h1>Meus Agendamentos</h1>
      </header>
      <section className="agendamentos-list">
        {agendamentos.length > 0 ? (
          agendamentos.map((agendamento) => (
            <div key={agendamento.id} className="agendamento-card">
              <div className="icons">
                <img src={icons} alt="icons" />
              </div>
              <div className="text">
                <h2>Doutor {agendamento.nome_doutor}</h2>
                <p>Data: {formatarData(agendamento.data)} <br /> às {agendamento.hora}</p>
              </div>
              <button onClick={() => cancelarAgendamento(agendamento.id)}>
                CANCELAR
              </button>
            </div>
          ))
        ) : (
          <p>Você não tem agendamentos no momento.</p>
        )}
      </section>
    </div>
  );
};

export default Agendamentos;
