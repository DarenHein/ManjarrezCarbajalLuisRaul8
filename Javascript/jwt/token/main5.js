const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Middleware para verificar el token
const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(403).send('Token es requerido');
    }
    const token = authHeader.split(' ')[1]; // Obtener el token después de "Bearer "
    jwt.verify(token, process.env.LLAVE_SECRETA, (err, decoded) => {
        if (err) {
            return res.status(401).send('Token inválido');
        }
        req.user = decoded; // Guardar el payload decodificado en req.user
        next(); // Llamar al siguiente middleware o manejador de ruta
    });
};

// Ruta protegida
app.get('/protected', verifyToken, (req, res) => {
    res.send('Esta es una ruta protegida');
});

// Ruta para mostrar información pública
app.get('/info', (req, res) => {
    res.json({
        nombre: "Luis"
    });
});

// Ruta para mostrar el formulario de login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Ruta para autenticar y obtener el token
app.post('/aunt', (req, res) => {
    const { name, email } = req.body;
    console.log(name);
    console.log(email);
    // Validaciones de base de datos aquí

    // Crear el payload
    const user = { nombre: name, email: email };

    // Crear el token
    const token = crearToken(user);
    res.json({ token });
});

// Función que crea el token
function crearToken(user) {
    // Necesitamos nuestra clave secreta
    const llave = process.env.LLAVE_SECRETA;
    // Crear el token
    const token = jwt.sign(user, llave, { expiresIn: '10m' });
    return token;
}

app.listen(3000, () => {
    console.log("Server corriendo en el puerto 3000...");
});
