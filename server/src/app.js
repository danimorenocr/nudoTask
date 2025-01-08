const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

// INICIALIZAR EXPRESS
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/api", userRoutes);

// Puerto de escucha
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
