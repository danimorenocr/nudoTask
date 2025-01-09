import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from '../services/authService';
import { useTranslation } from "react-i18next";

const Dashboard = () => {
const { t } = useTranslation();
  const user = authService.getCurrentUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>{t("welcome")} {user.nombre}</h2>
      <p>Este es el dashboard privado.</p>
    </div>
  );
};

export default Dashboard;
