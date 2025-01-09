const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const dotenv = require("dotenv");
dotenv.config();

// Funcion para registrar usuarios
const registerUser = async (req, res) => {
  const {
    nombre,
    nombre_usuario,
    fecha_nacimiento,
    correo,
    contrasena,
    correoVerificado,
    foto,
  } = req.body;

  //   validar que no falten datos
  if (
    !nombre ||
    !nombre_usuario ||
    !fecha_nacimiento ||
    !correo ||
    !contrasena
  ) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios." });
  }

  try {
    //   Verificar si el usuario existe
    const userExists = await User.findOne({ where: { correo } });
    if (userExists) {
      return res.status(400).json({ message: "El correo ya esta registrado." });
    }
    //   Verificar si el usuario existe
    const userExistsName = await User.findOne({ where: { nombre_usuario } });
    if (userExistsName) {
      return res.status(400).json({ message: "El nombre de usuario ya esta registrado." });
    }
    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(contrasena, 10);

    // Crear usuario
    const newUser = await User.create({
      nombre,
      nombre_usuario,
      fecha_nacimiento,
      correo,
      contrasena: hashedPassword,
      correoVerificado: false,
      foto,
    });

    // Crear Token jwt
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Enviar la respuesta
    res.status(201).json({ message: "Usuario creado con exito.", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el usuario" });
  }
};

const loginUser = async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    // Verificar si el usuario existe
    const user = await User.findOne({ where: { correo } });
    if (!user) {
      res.status(400).json({ message: "Correo incorrecto." });
    }

    // Verificar contrasena
    const password = await bcrypt.compare(contrasena, user.contrasena);
    if (!password) {
      res.status(400).json({ message: "Contraseña incorrecta" });
    }

    // Crear Token jwt
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    //Enviar respuesta
    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Hubo un error al intentar hacer login." });
  }
};

module.exports = { registerUser, loginUser };
