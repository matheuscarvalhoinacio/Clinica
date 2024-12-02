import React, { useState, useEffect } from "react";
import axios from '../../utils/axios';
import AgendaAluno from "../../img/AgendaAluno.png";

const Consulta = () => {
  const [agendamentos, setAgendamentos] = useState([]);

  const getHistico = async () => {
    try {
      const response = await axios.get("/api/getAlunoConfirmado");
      console.log(response.data); 
      setAgendamentos(response.data);
    } catch (error) {
      console.error("Erro ao buscar histórico", error);
    }
  };

  useEffect(() => {
    getHistico();
  }, []);

  useEffect(() => {
  }, [agendamentos]);

  const formatarData = (data) => {
    const dataFormatada = new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    return dataFormatada;
  };

  return (
    <div className="Card-container">
      <h1 className="titulo">Agendamentos</h1>
      <div className="Card-historico">
        {agendamentos.length > 0 ? (
          agendamentos.map((agendamento) => (
            <div className="card-conteudo" key={agendamento.id}>
              <section className="icons-historico">
                <img src={AgendaAluno} alt="Ícone de agendamento" />
              </section>
              <section className="data-historico">
                <p>Data: {formatarData(agendamento.data)}</p>
                <h1>
                  {agendamento.nome_doutor 
                    ? `${agendamento.nome_doutor}` 
                    : "nome não atribuído"}
                </h1>
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

export default Consulta;
