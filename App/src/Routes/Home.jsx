import React from "react";
import ActionButtons from "../components/ActionButtons/ActionButtons";
import { Header } from "../components/header/Header";
import { BottomNavigation } from "../components/BottomNavigation/BottomNavigation";
import Logotipo from "../components/Logotipo/Logotipo"
const Home = () => {
  return (
    <div >
      <Header/>
      <Logotipo/>
      <ActionButtons />
      <BottomNavigation/>
    </div>
  );
};

export default Home;
