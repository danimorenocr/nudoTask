import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:5000/api/auth";

const login = (email, password) => {
  return axios.post(`${API_URL}/login`, {
    correo: email,
    contrasena: password,
  });
};

const register = (data) => {
  return axios.post(`${API_URL}/register`, data);
};

const logout = () => {
  localStorage.removeItem("token");
};

const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decodedToken = jwtDecode(token); // Decodifica el token
    console.log("Token decodificado:", decodedToken);

    // Retorna el token completo o solo el nombre, según lo que necesites
    return decodedToken;
  } catch (err) {
    console.error("Error al decodificar el token:", err);
    return null;
  }
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
};
export default authService;
