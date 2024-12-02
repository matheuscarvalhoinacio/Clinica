import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import "./MeusAgendamentos.css";
import AgendaAluno from "../../img/AgendaAluno.png"

const MeusAgendamentos = () => {
  const [agendamentos, setAgendamentos] = useState([]);

  const getHistorico = async () => {
    try {
      const response = await axios.get("/api/getPendente");
      setAgendamentos(response.data);
    } catch (error) {
      console.error("Erro ao buscar histórico", error);
    }
  };

  useEffect(() => {
    getHistorico();
  }, []);

  const formatData = (data) => {
    const date = new Date(data);
    return date.toISOString().split("T")[0];
  };
  const confirmarAgendamento = async (idAgendamento) => {
    const data = localStorage.getItem("user");
    const auth = JSON.parse(data);
    const nomeDoutor = auth.user.nome;
    const idDoutor = auth.user.id; 
  
    try {
      const response = await axios.post("/api/ConfirmarAgendamento", {
        id_agendamento: idAgendamento,
        nome_doutor: nomeDoutor,
        id_doutor: idDoutor, 
      });
  
      if (response.status === 200) {
        alert(`Agendamento confirmado com sucesso!`);
        getHistorico();
      }
    } catch (error) {
      console.error("Erro ao confirmar agendamento", error);
      alert("Erro ao confirmar agendamento");
    }
  };
  

  return (
    <div className="container">
      <h1 className="titulo">Agendamentos Pendentes</h1>
      <div className="lista-agendamentos">
        {agendamentos.length > 0 ? (
          agendamentos.map((agendamento) => (
            <div key={agendamento.id} className="agendamento-cards">
              <div className="icones">
                <img src={AgendaAluno} alt="Ícones"  className="icon"/>
              </div>
              <div className="infos">
                <h1>{agendamento.nome}</h1>
                <div className="data-aluno">
                  {formatData(agendamento.data)} às{" "}
                  {agendamento.hora}
                </div>
                <button
                className="btn "
                onClick={() =>
                  confirmarAgendamento(agendamento.id, agendamento.nome_doutor)
                }
              >
                Confirmar
              </button>
              </div>
              
            </div>
          ))
        ) : (
          <p>Não há agendamentos pendentes.</p>
        )}
      </div>
    </div>
  );
};

export default MeusAgendamentos;
