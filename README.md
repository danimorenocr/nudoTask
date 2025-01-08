# NUDOTASK

Este proyecto es un **Task Tracker** que utiliza **React**, **Node.js**, **Express**, y **MySQL**. A continuación, se detallan las dependencias necesarias para configurar y ejecutar tanto el frontend como el backend del proyecto.

---

## **Estructura de Carpetas**

### **Backend**

El backend del proyecto utiliza Node.js y Express. La estructura inicial de carpetas puede ser la siguiente:

```
nudo-task/
├── server/
│   ├── src/
│   │   ├── config/       # Configuraciones del proyecto (Base de datos, variables de entorno)
│   │   ├── controllers/  # Controladores para manejar la lógica de las rutas
│   │   ├── models/       # Modelos de la base de datos (ORM o consultas SQL)
│   │   ├── routes/       # Definición de las rutas
│   │   ├── utils/        # Funciones auxiliares o utilidades
│   │   └── app.js        # Archivo principal del servidor Express
│   ├── .env              # Variables de entorno
│   ├── package.json      # Dependencias del backend
│   └── README.md         # Información del backend
```

### Pasos para crear el backend:

1. **Crear la carpeta base del proyecto:**

   ```bash
   mkdir nudo-task
   cd nudo-task
   ```

2. **Crear la carpeta del backend:**

   ```bash
   mkdir server
   cd server
   ```

3. **Inicializar el proyecto de Node.js:**

   ```bash
   npm init -y
   ```

4. **Crear la estructura de carpetas del backend:**

   ```bash
   mkdir "src", "src/config", "src/controllers", "src/models", "src/routes", "src/utils"
   New-Item src/app.js -ItemType File
   ```

5. **Configurar el archivo ****************`app.js`****************:**
   Define la configuración inicial del servidor Express:

   ```javascript
   const express = require('express');
   const cors = require('cors');
   const app = express();

   // Middlewares
   app.use(cors());
   app.use(express.json());

   // Rutas base
   app.use('/api', require('./routes')); // Configura tus rutas

   // Iniciar servidor
   const PORT = process.env.PORT || 5000;
   app.listen(PORT, () => {
       console.log(`Servidor corriendo en el puerto ${PORT}`);
   });

   module.exports = app;
   ```

---

### **Frontend**

El frontend utiliza React. La estructura inicial puede ser la siguiente:

```
nudo-task/
├── client/
│   ├── public/        # Archivos estáticos (HTML, imágenes, favicon)
│   ├── src/
│   │   ├── components/  # Componentes reutilizables
│   │   ├── pages/       # Páginas principales
│   │   ├── services/    # Lógica para interactuar con la API
│   │   ├── styles/      # Archivos CSS o estilos globales
│   │   ├── App.js       # Componente raíz de React
│   │   └── index.js     # Punto de entrada de React
│   ├── package.json    # Dependencias del frontend
│   └── README.md       # Información del frontend
```

### Pasos para crear el frontend:

1. **Volver a la carpeta base:**

   ```bash
   cd ../
   ```

2. **Crear la carpeta del frontend:**

   ```bash
   mkdir client
   cd client
   ```

3. **Inicializar un proyecto de React:**
   Usando Create React App:

   ```bash
   npx create-react-app .
   ```

4. **Crear la estructura de carpetas personalizada:**

   ```bash
   mkdir src/components src/pages src/services src/styles
   ```

5. **Modificar el archivo ****************`App.js`**************** para una configuración básica:**

   ```javascript
   import React from 'react';

   function App() {
       return (
           <div>
               <h1>Bienvenido a Nudo Task</h1>
           </div>
       );
   }

   export default App;
   ```

---

## **Backend (Node.js + Express)**

### Dependencias esenciales

Estas dependencias son necesarias para construir el servidor y conectarlo con la base de datos MySQL:

1. **`express`**

   - Framework para crear y gestionar el servidor web.
   - Instalación:
     ```bash
     npm install express
     ```

2. **`mysql2`**

   - Cliente MySQL para interactuar con la base de datos.
   - Instalación:
     ```bash
     npm install mysql2
     ```

3. **`cors`**

   - Permite configurar políticas de acceso para que el frontend pueda comunicarse con el backend.
   - Instalación:
     ```bash
     npm install cors
     ```

4. **`dotenv`**

   - Maneja variables de entorno como las credenciales de la base de datos.
   - Instalación:
     ```bash
     npm install dotenv
     ```

5. **`nodemon`** (opcional, solo para desarrollo)

   - Reinicia automáticamente el servidor cuando cambias el código.
   - Instalación global (recomendada):
     ```bash
     npm install -g nodemon
     ```
   - Uso en desarrollo:
     ```bash
     nodemon server.js
     ```

---

## **Frontend (React)**

### Dependencias esenciales

Estas dependencias son necesarias para la interfaz de usuario y para conectar con el backend:

1. **`react-router-dom`**

   - Gestión de rutas en el frontend (ej: navegación entre páginas).
   - Instalación:
     ```bash
     npm install react-router-dom
     ```

2. **`axios`**

   - Cliente HTTP para hacer llamadas API al backend.
   - Instalación:
     ```bash
     npm install axios
     ```

3. **`dotenv`** (opcional)

   - Para manejar variables de entorno en el frontend (como la URL del backend).
   - Instalación:
     ```bash
     npm install dotenv
     ```

4. **`react-icons`** (opcional)

   - Provee íconos listos para usar.
   - Instalación:
     ```bash
     npm install react-icons
     ```

---

### Dependencias opcionales (útiles para estilos)

1. **`tailwindcss`** o **`bootstrap`**

   - Frameworks CSS para diseñar rápidamente la interfaz.
   - Instalación de TailwindCSS:
     ```bash
     npm install -D tailwindcss
     npx tailwindcss init
     ```
   - Instalación de Bootstrap:
     ```bash
     npm install bootstrap
     ```

2. **`styled-components`**

   - Para escribir estilos directamente en los componentes.
   - Instalación:
     ```bash
     npm install styled-components
     ```

---

## **Herramientas recomendadas**

Además de las dependencias, es importante contar con estas herramientas:

1. **Node.js y npm**

   - Asegúrate de tener Node.js instalado. Compruébalo con:
     ```bash
     node -v
     npm -v
     ```

2. **MySQL**

   - Necesitas un servidor MySQL configurado. Puedes usar MySQL Workbench para gestionarlo.

3. **Postman o Insomnia** (opcional)

   - Herramientas para probar tus APIs.

4. **Git**

   - Para el control de versiones y subir tu proyecto a un repositorio (como GitHub).

---

### Verificación de dependencias

#### En el Backend:

```bash
npm list --depth=0
```

#### En el Frontend:

```bash
cd client
npm list --depth=0
```

#########################################################################################

# BASE DE DATOS
CREATE DATABASE bd_nudotask;

USE bd_nudotask;

-- Tabla Usuario
CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    nombre_usuario VARCHAR(50) UNIQUE NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    correo_verificado BOOLEAN DEFAULT FALSE,
    foto VARCHAR(255)
);

-- Tabla Tokens
CREATE TABLE Tokens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    token VARCHAR(255) NOT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NOT NULL,
    is_used BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES Usuario(id) ON DELETE CASCADE
);

-- Tabla Proyecto
CREATE TABLE Proyecto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    duracion INT NOT NULL, -- Duración en días
    tecnologias VARCHAR(255) NOT NULL,
    cliente VARCHAR(100),
    id_etapa INT,
    FOREIGN KEY (id_etapa) REFERENCES Etapa(id) ON DELETE SET NULL
);

-- Tabla Etapa
CREATE TABLE Etapa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_tarea INT,
    FOREIGN KEY (id_tarea) REFERENCES Tarea(id) ON DELETE SET NULL
);

-- Tabla Tarea
CREATE TABLE Tarea (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    prioridad ENUM('Baja', 'Media', 'Alta') NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    tiempo INT NOT NULL, -- Tiempo en horas
    modulo_kanban ENUM('Backlog', 'Por Hacer', 'Progreso', 'Problema') NOT NULL,
    imagen VARCHAR(255)
);

-- Tabla Subtarea
CREATE TABLE Subtarea (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_tarea INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_tarea) REFERENCES Tarea(id) ON DELETE CASCADE
);




