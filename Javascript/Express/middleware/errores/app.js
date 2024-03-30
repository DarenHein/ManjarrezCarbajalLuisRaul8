// Paso 1: Importar Express
const express = require('express');
const app = express();

// Paso 2: Definir una Ruta de Prueba
app.get('/error', (req, res, next) => {
    // Este manejador de ruta arroja un error de prueba
    throw new Error('Este es un error de prueba');
});

// Paso 3: Middleware de Manejo de Errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('¡Oops! Algo salió mal.');
});

// Paso 4: Iniciar el Servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
