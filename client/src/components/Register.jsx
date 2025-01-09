import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

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

    // Validación de la fecha de nacimiento
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const fechaActual = new Date();

    if (fechaNacimientoDate >= fechaActual) {
      setError("La fecha de nacimiento debe ser anterior a la fecha actual.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        nombre,
        nombre_usuario: nombreUsuario,
        fecha_nacimiento: fechaNacimiento,
        correo: email,
        contrasena: password,
      });

      console.log("Response data:", response.data);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } else {
        setError("Error: No se recibió un token.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Hubo un error al registrar el usuario. Verifique los datos ingresados.");
    }
  };

  return (
    <div className="register-container">
      <h2>{t("register")}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">{t("name")}</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="nombre_usuario">{t("username")}</label>
          <input
            type="text"
            id="nombre_usuario"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="fecha_nacimiento">{t("birthday")}</label>
          <input
            type="date"
            id="fecha_nacimiento"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="correo">{t("email")}</label>
          <input
            type="email"
            id="correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="contrasena">{t("password")}</label>
          <input
            type="password"
            id="contrasena"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">{t("register")}</button>
      </form>
    </div>
  );
};

export default Register;
