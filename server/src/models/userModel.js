const db = require("../config/db");

// Función para obtener todos los usuarios
const getAllUsers = (callback) => {
  db.query("SELECT * FROM Usuario", (err, results) => {
    if (err) {
      console.error("Error al obtener usuarios", err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

// CREAR USUARIO
const createUser = (userData, callback) => {
  const {
    nombre,
    nombreUsuario,
    fecha,
    correo,
    contrasena,
    correoVerificado,
    foto,
  } = userData;
  db.query(
    "INSERT INTO Usuario (nombre, nombre_usuario, fecha_nacimiento, correo, contrasena, correo_verificado, foto ) VALUES (?,?,?,?,?,?,?)",
    [nombre, nombreUsuario, fecha, correo, contrasena, correoVerificado, foto],
    (err, results) => {
      if (err) {
        console.error("Error al crear el usuario", err);
        return callback(err, null);
      }
      callback(null, results);
    }
  );
};

module.exports = { getAllUsers, createUser };
