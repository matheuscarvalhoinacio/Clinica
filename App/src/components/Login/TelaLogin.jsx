import React, { useState } from "react";
import "./TelaLogin.css";
import {  useNavigate } from "react-router-dom";
import Una from "../../img/Una.png";
import axios from "../../utils/axios.js";

const TelaLogin = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/login", { user, password });
      localStorage.setItem("token", data.token);
      alert("Usuário autenticado!");
      navigate('/home');
    } catch (error) {
      alert("Usuário não autenticado.");
      console.log(error)
    }
  };
  

  return (
    <div className="login-container">
      <img src={Una} alt="Logo Una" className="Una" />
      <form className="login-form">
        <input
          type="text"
          placeholder="CPF"
          className="login-input"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login-checkbox">
          <input
            type="checkbox"
            id="manterConectado"
          />
          <label htmlFor="manterConectado">Manter conectado</label>
        </div>
        <button type="button" className="login-button" onClick={handleSubmit}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default TelaLogin;
