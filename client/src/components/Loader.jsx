import React from 'react';
import '../styles/loader.css';  // Importamos los estilos para el loader

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
