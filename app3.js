
/**
 * 
 * todo para lograr esto tuve que ocuapar alque no sabia bueno si pero solo las habe
 * todo que son las cookies estas son archivos de gardado que el programa amnda a nuestro 
 * navegador y este a suves las elimina cuando este se cierre 
 * sirven para guarda datos de configuracion de una pagina con coomo unos mini json 
 * 
 * !ahorita lo que queremos es que se guarde la secion del clinte 
 * !y mas que no se puede acceder a otras rutas del navegador  
 * !luis del futuro te dejo un chingo de comntarios de lo que no entiendas 
 * 
*/


const express = require('express');
const mysql = require('mysql');
const session = require('express-session'); //!libreria para inicio de secion es la que manda el coockie
const app = express();
const cors = require('cors');

// Configuración de la conexión a MySQL
const conexion = mysql.createConnection({
    host: '127.0.0.1',
    user: 'daren',
    password: '5882',
    database: 'personas'
});

conexion.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Conexión exitosa");
    }
});

// Middlewares
app.use(express.json()); // Para manejar JSON
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//!ahorira vamos iniciar secion por consulta sql pero podemos inciiar secion con contraseña 
app.use(session({ // !parte del midelware 
    secret: 'clave-secreta', //todo calve secreta para firmar los coockies de secion 
    resave: false, //todo  mejora rendimiento al evitar guardar daros incesesarios 
    saveUninitialized: true,// todo  se asegura que todos tengamos una cokiie desde el inicio 
    cookie: { secure: false } //todo  Para desarrollo, en producción debe ser true con HTTPS
    //todo por que es la que envia la cookie de forma segura o no 
}));

// Logger middleware
app.use((req, res, next) => {
    console.log("Pasó por aquí");
    next();
});

// Ruta de autenticación
app.get('/login/:nombre', (req, res) => {
    const nombre = req.params.nombre; // todo tomamos el iniciao de secion del usuario 

    const consulta = "SELECT * FROM persona WHERE nombre = ?"; 
    conexion.query(consulta, [nombre], (error, resultado) => {
        if (error) {
            console.log("Error en la consulta");
            res.status(500).send("Error en la consulta");
        } else if (resultado.length === 0) {
            res.status(401).send("Correo o contraseña incorrectos");
        } else { // todo si el usuario logro un inicio exitoso 
            console.log("Usuario autenticado"); 
            req.session.isAuthenticated = true; // todo decimos que el usuario ya esta en verdadero 
            req.session.user = resultado[0]; // todo almacenamos el nombre
            res.send("Inicio de sesión exitoso");
        }
    });
});

//TODO DESPUES DE AQUI SE SI NO SE A VALIDADO EL USUARIO ESTA RESTRINGIDO 

// Middleware para verificar autenticación
function checkAuth(req, res, next) {
    if (req.session.isAuthenticated) {
        next(); // El usuario está autenticado, continuar con la siguiente ruta
    } else {
        res.status(401).send('No está autenticado');
    }
}

// Aplicar el middleware de autenticación a todas las rutas que deben estar protegidas
app.use(checkAuth);

// Rutas protegidas
app.get('/hola/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    console.log(nombre);

    const consulta = "SELECT * FROM persona WHERE nombre = ?";
    conexion.query(consulta, [nombre], (error, resultado) => {
        if (error) {
            console.log("Error en la consulta");
            res.status(500).send("Error en la consulta");
        } else if (resultado.length === 0) {
            res.status(404).send("Nombre no encontrado");
        } else {
            console.log(resultado);
            res.send(`Hola ${nombre}. Datos: ${JSON.stringify(resultado)}`);
        }
    });
});

app.get('/about', (req, res) => {
    res.send("acerca de");
});

app.listen(3000, () => {
    console.log("Aplicación corriendo en el puerto 3000");
});
