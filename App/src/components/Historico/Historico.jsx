import React, { useState, useEffect } from "react";
import "./Historico.css";
import axios from '../../utils/axios';
import AgendaAluno from "../../img/AgendaAluno.png";

const Historico = () => {
  const [agendamentos, setAgendamentos] = useState([]);

  const getHistico = async () => {
    try {
      const response = await axios.get("/api/getHistico");
      setAgendamentos(response.data);
    } catch (error) {
      console.error("Erro ao buscar histórico", error);
    }
  };

  useEffect(() => {
    getHistico();
  }, []);

  return (
    <div className="Card-conteiner">
      <div className="Card-historico">
        {agendamentos.length > 0 ? (
          agendamentos.map((agendamento) => (
            <div className="card-conteudo" key={agendamento.id}>
              <section className="icons-historico">
                <img src={AgendaAluno} alt="icons" />
              </section>
              <section className="data-historico">
                <p>{new Date(agendamento.data).toLocaleDateString('pt-BR')}</p>
                <h1>{agendamento.nome_doutor ? `Dr. ${agendamento.nome_doutor}` : "Pendente"}</h1>
                </section>
              <section className="status">
                <h1>{`Status: ${agendamento.status}`}</h1>
              </section>
            </div>
          ))
        ) : (
          <p>Não há agendamentos disponíveis.</p>
        )}
      </div>
    </div>
  );
};

export default Historico;
