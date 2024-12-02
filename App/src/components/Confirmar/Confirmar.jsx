import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

import "./Confirmar.css";
import logo from "../../img/una.png";

function Confirmar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { dataHora } = location.state || {};
  const handleConfirmar = async () => {
    try {
      const agendamento = {
        data: dataHora.split(" ")[0],
        hora: dataHora.split(" ")[1],
      };
      console.log("Agendamento:", agendamento);
      const response = await axios.post("/api/setAgendar", agendamento);

      console.log("Resposta do servidor:", response.data);

      navigate("/home");
    } catch (error) {
      console.error("Erro ao confirmar agendamento:", error);
      alert("Ocorreu um erro ao confirmar o agendamento. Tente novamente.");
    }
  };

  return (
    <div className="Conteudo">
      <div className="container-confirmar-remocao">
        <div className="cabecalho">
          <img src={logo} alt="Logo UNA" className="logo" />
        </div>
        <div className="conteudo">
          <div className="cartao-agendamento-remocao">
            <p>
              Por favor, confirme que você gostaria de{" "}
              <span className="destaque-remocao">CONFIRMAR</span> o seguinte
              agendamento:
            </p>
            <div className="data-agendamento-remocao">
              <p className="data">{dataHora.split(" ")[0]}</p>
              <p className="hora">CHEGADA: {dataHora.split(" ")[1]}</p>
            </div>
          </div>
          <button className="button" onClick={handleConfirmar}>
            CONFIRMAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirmar;
