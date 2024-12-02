import React, { useState, useEffect } from "react";
import useDisponibilidade from "../../hook/useDisponibilidade";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isWeekend,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";

import "./Calendario.css";

const Calendario = () => {
  const { disponibilidade, loading, error } = useDisponibilidade(2024, 12);
  const hoje = new Date();
  const inicioMes = startOfMonth(hoje);
  const fimMes = endOfMonth(hoje);
  const diasNoMes = eachDayOfInterval({ start: inicioMes, end: fimMes });

  const [diasDisponiveis, setDiasDisponiveis] = useState([]);
  const [diaSelecionado, setDiaSelecionado] = useState(null);
  const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);

  useEffect(() => {
    if (disponibilidade && disponibilidade.length > 0) {
      const dias = disponibilidade
        .filter((item) => item.horarios_disponiveis.length > 0)
        .map((item) => parseInt(item.data.split("-")[2]));
      setDiasDisponiveis(dias);
    }
  }, [disponibilidade]);

  const handleDiaClick = (dia) => {
    const diaData = disponibilidade.find(
      (item) => parseInt(item.data.split("-")[2]) === dia
    );

    if (diaData) {
      setDiaSelecionado(dia);
      setHorariosDisponiveis(diaData.horarios_disponiveis);
    }
  };

  if (loading) {
    return <p>Carregando disponibilidade...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div className=".container-calendario">
      <div className="Calendario">
        <h1>AGENDAMENTO</h1>
        <p>As datas disponíveis estão destacadas em vermelho.</p>

        <div className="mes-atual">
          {format(inicioMes, "MMMM yyyy", { locale: ptBR }).toUpperCase()}
        </div>

        <div className="grid">
          {["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"].map(
            (diaSemana, index) => (
              <div key={index} className="font-semibold text-gray-700">
                {diaSemana}
              </div>
            )
          )}
          {diasNoMes.map((dia, index) => {
            const diaDoMes = parseInt(format(dia, "d"));
            const estaDisponivel = diasDisponiveis.includes(diaDoMes);
            const ehFimDeSemana = isWeekend(dia);

            return (
              <div
                key={index}
                className={`flex items-center justify-center ${
                  estaDisponivel
                    ? "bg-red-100 text-red-700"
                    : ehFimDeSemana
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
                onClick={() => estaDisponivel && handleDiaClick(diaDoMes)}
              >
                {diaDoMes}
              </div>
            );
          })}
        </div>

        <h2>HORÁRIOS DISPONÍVEIS</h2>
        {diaSelecionado ? (
          <p>Horários disponíveis para o dia {diaSelecionado}</p>
        ) : (
          <p>Selecione um dia para ver os horários disponíveis.</p>
        )}
        <div className="hors grid-cols-4 gap-4">
          {horariosDisponiveis.length > 0
            ? horariosDisponiveis.map((horario, index) => {
                const dataHora = new Date(
                  2024,
                  11,
                  diaSelecionado,
                  parseInt(horario.split(":")[0]),
                  parseInt(horario.split(":")[1])
                );

                const dataHoraFormatada = format(dataHora, "yyyy-MM-dd HH:mm");

                return (
                  <Link
                    to="/confirmar"
                    state={{
                      dataHora: dataHoraFormatada, 
                      hora: horario,
                    }}
                  >
                    <button>{horario}</button>
                  </Link>
                );
              })
            : diaSelecionado && <p>Sem horários disponíveis para este dia.</p>}
        </div>
      </div>
    </div>
  );
};

export default Calendario;
