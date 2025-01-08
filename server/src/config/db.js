const mysql = require("mysql2");
// Cargar variables de entorno
require("dotenv").config();

// Crear la conexion a la bd
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Verificar conexion

db.connect((err) => {
  if (err) {
    console.error("Error de conexión a la base de datos " + err.stack);
    return;
  }
  console.log("Conexión a la base de datos establecida");
});

module.exports = db;
