import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate(); // redirije a otras paginas

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de la forma tradicional
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          correo: email,
          contrasena: password,
        }
      );
      console.log(response.data); // Verificar la respuesta del backend
      localStorage.setItem("token", response.data.token); // Almacenar el token JWT - mantener la sesion del usuario
      history.push("/dashboard"); // Redirigir al dashboard
    } catch (err) {
      setError("Correo o contraseña incorrectos.");
    }
  };
  return (
    <div className="login-container">
      <h2>Iniciar sesion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};
export default Login;
