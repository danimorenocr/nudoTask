import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "../styles/register.css";
import LanguageSwitcher from "./LanguageSwitcher";

const Register = () => {
  const { t } = useTranslation();
  const [nombre, setNombre] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fechaNacimientoDate = new Date(fechaNacimiento);
    const fechaActual = new Date();

    if (fechaNacimientoDate >= fechaActual) {
      setError("La fecha de nacimiento debe ser anterior a la fecha actual.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          nombre,
          nombre_usuario: nombreUsuario,
          fecha_nacimiento: fechaNacimiento,
          correo: email,
          contrasena: password,
        }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } else {
        setError("Error: No se recibió un token.");
      }
    } catch (err) {
      setError("El nombre de usuario o correo ya está registrado.");
    }
  };

  const handleLoginClick = () => {
    navigate("/login"); // Redirige al formulario de registro
  };

  return (
    <div className="register-page">
      <div className="register-image">
        <button className="signup-button" onClick={handleLoginClick}>
          {t("login")}
        </button>
      </div>
      <div className="register-form-container">
        <LanguageSwitcher />
        <div className="logo">
          <img src="logo.png" alt="NudoTask Logo" />
        </div>
        <h2 className="welcome-title-nudo">NudoTask</h2>
        {/* <h2 className="welcome-title">{t("welcome")}</h2> */}
        <form className="register-form" onSubmit={handleSubmit}>
          <div>
            <label className="form-label" htmlFor="nombre">
              {t("name")}
            </label>
            <input
              className="form-input"
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="form-label" htmlFor="nombre_usuario">
              {t("username")}
            </label>
            <input
              className="form-input"
              type="text"
              id="nombre_usuario"
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="form-label" htmlFor="fecha_nacimiento">
              {t("birthday")}
            </label>
            <input
              className="form-input"
              type="date"
              id="fecha_nacimiento"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="form-label" htmlFor="correo">
              {t("email")}
            </label>
            <input
              className="form-input"
              type="email"
              id="correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="form-label" htmlFor="contrasena">
              {t("password")}
            </label>
            <input
              className="form-input"
              type="password"
              id="contrasena"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div>
            <button className="register-button" type="submit">
              {t("register")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
