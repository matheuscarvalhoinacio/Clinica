import React from "react";
import { FaCalendarAlt, FaHome, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./BottomNavigation.css";

export const BottomNavigation = () => {
  return (
    <nav className="bottom-navigation">
      <div id="nav">
        <Link to="/Historico">
          <FaCalendarAlt style={{ color: "#800000", fontSize: "24px" }} />
        </Link>
        <Link to="/home">
          <FaHome style={{ color: "#800000", fontSize: "24px" }} />
        </Link>
        <Link to="/Perfil">
          <FaUser style={{ color: "#800000", fontSize: "24px" }} />
        </Link>
      </div>
    </nav>
  );
};
