import React from "react";
import Confirmar from "../components/Confirmar/Confirmar";
import { BottomNavigation } from "../components/BottomNavigation/BottomNavigation";
import { Header } from "../components/header/Header";


const ConfirmarAgenda = () => {
  return (
    <div>
      <Header />
      <Confirmar />
      <BottomNavigation />
    </div>
  );
};

export default ConfirmarAgenda;
