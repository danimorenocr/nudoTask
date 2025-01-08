const userModel = require("../models/userModel");

// Controlador para obtener todos los usuarios
const getAllUsers = (req, res) => {
  userModel.getAllUsers((err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error al obtener usuarios" });
    }
    res.status(200).json(results);
  });
};

const createUser = (req, res) => {
  // Recibir info del front
  const {
    nombre,
    nombreUsuario,
    fecha,
    correo,
    contrasena,
    correoVerificado,
    foto,
  } = req.body;

  // Pasar lo del front a el modelo de userData

  const userData = {
    nombre,
    nombreUsuario,
    fecha,
    correo,
    contrasena,
    correoVerificado,
    foto,
  };

  userModel.createUser(userData, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error al crear eel usuario" });
    }
    res.status(201).json({ message: "Usuario creado con éxito", data: results });
  });
};

module.exports = { getAllUsers, createUser };
