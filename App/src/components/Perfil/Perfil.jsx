import React from "react";
import "./Perfil.css";
import foto from "../../img/cliente.webp";

const Perfil = () => {
  // Recupera o usuário do localStorage e faz o parse para um objeto
  const storedData = localStorage.getItem("user");
  const parsedData = storedData ? JSON.parse(storedData) : null;

  // Obtém o nome do usuário, tratando a possibilidade de dados ausentes
  const name = parsedData?.user?.nome || "Usuário não identificado";

  return (
    <div className="perfil">
      <span className="perfil-foto">
        <img src={foto} alt="Foto do cliente" />
      </span>
      <h1>{name}</h1>
      <form>
        <input type="text" placeholder="Senha" />
        <input type="text" placeholder="Confirmar" />
        <input type="text" placeholder="Nome" />
        <input type="submit" value="Salvar" />
      </form>
    </div>
  );
};

export default Perfil;
