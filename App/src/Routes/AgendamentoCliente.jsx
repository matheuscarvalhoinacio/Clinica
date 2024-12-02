import React from 'react'
import MeusAgendamentos from '../components/MeuAgendamentos/MeusAgendamentos'
import Agendamentos from '../components/Agendamentos/Agendamentos'

import { BottomNavigation } from '../components/BottomNavigation/BottomNavigation'
import { Header } from '../components/header/Header'

const Agendamento = () => {
  const data = localStorage.getItem("user")
  const auth = JSON.parse(data)


  return (
    <div>
      <Header />
      {auth.user.tipo_usuario === "paciente" ?  <Agendamentos /> :  < MeusAgendamentos/> }
      <BottomNavigation />
    </div>
  )
}

export default Agendamento