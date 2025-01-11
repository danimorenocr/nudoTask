import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "../styles/login.css";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // redirije a otras paginas

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          correo: email,
          contrasena: password,
        }
      );

      console.log("Response data:", response.data);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } else {
        setError("Error: No se recibió un token.");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message); // Mostrar mensaje específico del backend
      } else {
        setError("Hubo un error al intentar iniciar sesión.");
      }
    }
  };

  const handleSignUpClick = (e) => {
    e.preventDefault();
    navigate("/register"); // Redirige al formulario de registro
  };

  return (
    <div className="login-page">
      <div className="login-image">
        <button className="signup-button" onClick={handleSignUpClick}>
          {t("register")}
        </button>
      </div>
      <div className="login-form-container">
        <LanguageSwitcher />
        <div className="logo-container">
          <div className="logo">
            <img src="logo.png" alt="NudoTask Logo" />
          </div>
          <div>
            <h2 className="welcome-title-nudo">NudoTask</h2>
            <h2 className="welcome-title">{t("welcome")}</h2>
          </div>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="email">
            {t("email")}
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="form-label" htmlFor="password">
            {t("password")}
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="/forgot-password" className="forgot-password-link">
            {t("forgot")}
          </a>
          <button type="submit" className="login-button">
            {t("login")}
          </button>
        </form>
        <div className="signup-text">
          <p>
            {t("account")}{" "}
            <button onClick={handleSignUpClick} className="link-button">
              {t("register")}
            </button>
          </p>

          {error && <p className="form-error">{error}</p>}
        </div>
      </div>
    </div>
  );
};
export default Login;
