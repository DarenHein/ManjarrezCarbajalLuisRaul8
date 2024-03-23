const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const conexion = mysql.createConnection({
    host: '127.0.0.1',
    user: 'daren',
    password: '5882',
    database: 'test_db'
});

conexion.connect((error) => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/usuarios', (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    
    const consulta = 'INSERT INTO perdonas(nombre, email) VALUES (?, ?)';
    
    conexion.query(consulta, [nombre, email], (error, resultado) => {
        if (error) {
            res.send('Error al ingresar usuario: ' + error.message);
        } else {
            res.send('Usuario ingresado con éxito');
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Aplicación corriendo en el puerto ${PORT}`);
});
