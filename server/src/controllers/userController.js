const User = require('../models/userModel');

// Obtener detalles del usuario por ID
const getUserDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener los detalles del usuario.' });
  }
};

// Actualizar la información del usuario
const updateUserDetails = async (req, res) => {
  const { id } = req.params;
  const { nombre, nombre_usuario, fecha_nacimiento, foto } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }

    // Actualizar los campos del usuario
    user.nombre = nombre || user.nombre;
    user.nombre_usuario = nombre_usuario || user.nombre_usuario;
    user.fecha_nacimiento = fecha_nacimiento || user.fecha_nacimiento;
    user.foto = foto || user.foto;

    await user.save();

    res.status(200).json({ message: 'Información del usuario actualizada.', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al actualizar la información del usuario.' });
  }
};

module.exports = { getUserDetails, updateUserDetails };
