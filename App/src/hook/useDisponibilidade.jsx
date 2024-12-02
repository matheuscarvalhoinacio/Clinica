import { useState, useEffect } from "react";
import axios from '../utils/axios';
const useDisponibilidade = (ano, mes) => {
  const [disponibilidade, setDisponibilidade] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDisponibilidade = async () => {
      try {
        setLoading(true);
        setError(null);

        const {data} = await axios.get(`/api/dias-horarios-disponiveis`);

   
        setDisponibilidade(data);
      } catch (err) {
        setError(err.message || "Erro ao carregar a disponibilidade");
      } finally {
        setLoading(false);
      }
    };

    fetchDisponibilidade();
  }, [ano, mes]);

  return { disponibilidade, loading, error };
};

export default useDisponibilidade;
