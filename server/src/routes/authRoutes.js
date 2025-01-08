const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Ruta para registrar
router.post('/register', authController.registerUser);
// Ruta para login
router.post('/login', authController.loginUser);

module.exports = router;