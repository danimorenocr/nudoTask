const express = require('express');
const router = express.Router();
const { getUserDetails, updateUserDetails } = require('../controllers/userController');

// Ruta para obtener detalles del usuario
router.get('/:id', getUserDetails);

// Ruta para actualizar los detalles del usuario
router.put('/:id', updateUserDetails);

module.exports = router;
