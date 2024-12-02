import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
import "./Cria.css";
import axios from '../../utils/axios';

const Cria = () => {
  const [formData, setFormData] = useState({
    campus: "Campus",
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    manterConectado: false,
    autorizarTermos: false,
  });

  const navigate = useNavigate();  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/users/", { 
        name: formData.nome,
        email: formData.email,
        password: formData.senha,
        cpf: formData.cpf,
      });

      if (response.status === 201) {
        alert("Usuário cadastrado com sucesso!");
      } else {
        alert("Erro ao cadastrar usuário: " + response.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar dados para o servidor.");
    }
  };

  const handleGoBack = () => {
    navigate('/');  
  };

  return (
    <div className="cadastro-container">
      <h1 className="cadastro-logo">una</h1>
      <h2 className="cadastro-subtitle">Bookmark</h2>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          className="cadastro-input"
          value={formData.nome}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          className="cadastro-input"
          value={formData.cpf}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="cadastro-input"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          className="cadastro-input"
          value={formData.senha}
          onChange={handleChange}
        />
        <div className="cadastro-checkbox">
          <input
            type="checkbox"
            id="manterConectado"
            name="manterConectado"
            checked={formData.manterConectado}
            onChange={handleChange}
          />
          <label htmlFor="manterConectado">Manter conectado</label>
        </div>
        <div className="cadastro-checkbox">
          <input
            type="checkbox"
            id="autorizarTermos"
            name="autorizarTermos"
            checked={formData.autorizarTermos}
            onChange={handleChange}
          />
          <label htmlFor="autorizarTermos">Autorizar Termos de Uso</label>
        </div>
        <p className="cadastro-terms">
          Ler mais sobre os termos <a href="/">aqui</a>
        </p>
        <button type="submit" className="cadastro-button">
          Cadastrar
        </button>
      </form>
      <button className="cadastro-back-button" onClick={handleGoBack}>Voltar</button>
    </div>
  );
};

export default Cria;
