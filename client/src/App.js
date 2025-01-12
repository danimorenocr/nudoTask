import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Loader from "./components/Loader"; // Importamos el loader

const App = () => {
  const [loading, setLoading] = useState(false);

  // Simula la carga de la página cuando se cambia de ruta
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Simulamos 2 segundos de carga
    return () => clearTimeout(timer); // Limpiamos el temporizador
  }, []);

  return (
    <Router>
      {loading && <Loader />} {/* Muestra el loader si loading es true */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
