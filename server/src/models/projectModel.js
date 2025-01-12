const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Project = sequelize.define("Project", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombre_usuario: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo_verificado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  // Configuración de la tabla y otras opciones
  tableName: "proyecto",  // Nombre exacto de la tabla
  timestamps: false,     // Desactiva los timestamps `createdAt` y `updatedAt`
});

// Sincroniza el modelo con la base de datos
Project.sync();

module.exports = Project;
