import React from 'react'
import { BottomNavigation } from "../components/BottomNavigation/BottomNavigation";
import { Header } from '../components/header/Header'
import Historico from '../components/Historico/Historico'

const Historicos = () => {
  return (
    <div>
      <Header />
      <Historico />
      <BottomNavigation />
    </div>
  )
}

export default Historicos