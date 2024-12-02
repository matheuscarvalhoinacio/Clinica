import React from 'react'
import Consulta from '../components/Consulta/Consulta'
import { BottomNavigation } from '../components/BottomNavigation/BottomNavigation'
import { Header } from "../components/header/Header";

const Consultas = () => {
  return (
    <div>
            <Header />

        <Consulta/>
        <BottomNavigation/>
    </div>
  )
}

export default Consultas