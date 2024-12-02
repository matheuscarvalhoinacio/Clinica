import React from "react";
import { useNavigate } from "react-router-dom"; 
import myCliente from "../../img/cliente.webp";
import Sair from "../../img/Sair.png";
import axios from "../../utils/axios";
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate(); 

  const data = localStorage.getItem("user");
  const auth = JSON.parse(data);
  const name = auth?.user?.nome || "Usuário";

  const deletSessions = async () => {
    const token = localStorage.getItem("token"); 
    if (!token) {
      console.error("Token não encontrado");
      return;
    }

    try {
      await axios.delete("/auth", { headers: { token } }); 
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/"); 
    } catch (error) {
      console.error("Erro ao fazer logout:", error.response?.data || error.message);
    }
  };

  return (
    <header className="header">
      <div className="user-info">
        <img src={myCliente} alt="Cliente" className="user-avatar" />
        <h5>Olá, {name}</h5>
      </div>
      <img
        src={Sair}
        alt="Sair"
        className="logout-icon"
        onClick={deletSessions} 
      />
    </header>
  );
};
