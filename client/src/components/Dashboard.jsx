import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from '../services/authService';

const Dashboard = () => {
  const user = authService.getCurrentUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Bienvenido, {user.nombre}</h2>
      <p>Este es el dashboard privado.</p>
    </div>
  );
};

export default Dashboard;
