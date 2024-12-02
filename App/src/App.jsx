import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/header/Header";
import Logotipo from "./components/Logotipo/Logotipo";
import { BottomNavigation } from "./components/BottomNavigation/BottomNavigation";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
};

export default App;
