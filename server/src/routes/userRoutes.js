const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Ruta para obtener todos los usuarios
router.get('/users', userController.getAllUsers);
// Ruta para crear un usuario
router.post('/users', userController.createUser);

module.exports = router;
