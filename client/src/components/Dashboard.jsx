import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import authService from "../services/authService";
import { useTranslation } from "react-i18next";
import NavBar from "./NavBar";
import LanguageSwitcher from "./LanguageSwitcher";

const Dashboard = () => {
  const { t } = useTranslation();
  const [isNavOpen, setIsNavOpen] = useState(true);
  const user = authService.getCurrentUser();

  if (user && user.nombre) {
    console.log("Nombre del usuario:", user.nombre);
  } else {
    console.log("El token no contiene el nombre del usuario.");
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  // Maneja la apertura y cierre del NavBar
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div
      className="dashboard-container"
      style={{ marginLeft: isNavOpen ? "250px" : "80px" }}
    >
      <NavBar isOpen={isNavOpen} toggleNav={toggleNav} />
      <LanguageSwitcher />
      <div className="dashboard-content">
        <h2>
          {t("welcome")} {user.nombre}
        </h2>
      </div>
    </div>
  );
};

export default Dashboard;
