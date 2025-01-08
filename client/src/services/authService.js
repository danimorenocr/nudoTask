import axios from "axios";

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
  return JSON.parse(localStorage.getItem("user"));
};
const authService = {
  register,
  login,
  logout,
  getCurrentUser,
};
export default authService;
