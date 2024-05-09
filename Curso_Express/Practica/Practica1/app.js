/**
 * Ejercicio:
Crea una aplicación Express que tenga dos rutas:

Una ruta GET en la raíz ('/') que devuelva un mensaje de bienvenida.
Una ruta POST en la ruta '/saludar' que acepte un objeto JSON con el nombre de una persona y devuelva un saludo personalizado.
Requisitos:
La ruta POST debe aceptar un objeto JSON con el siguiente formato: { "nombre": "Nombre de la persona" }.
La ruta POST debe devolver un objeto JSON que contenga un mensaje de saludo personalizado, como { "mensaje": "¡Hola, Nombre!" }.
Puntos extra (opcionales):
Implementa manejo de errores para casos donde no se envíe el nombre en la solicitud POST.
Implementa un middleware que registre cada solicitud recibida mostrando información como la URL solicitada y el método HTTP utilizado. 
 * 
 * 
 */

const express = require('express')
const app = express()

// todo configuraciones 
app.use(express.json())

// todo ruta raiz que devuelve un saludo 
app.get('/' , (req,res) => {
    res.status(200).send("saludo desde el servidor")
})

// todo ruta post que recibe un json con nombre 
app.post('/saludar' , (req,res) => {
    // recibimos el json del cliente 
    console.log(req.body) // mostramos el json del cliente madno 
    // creamos nuestro json para mandarlo 
    var saludo = {
        "saludo" : "hola mundo"
    }
    // con el metodo res mandamos nuestro json al cliente
    res.json(saludo)
})

// como punto extra mandmos el us para que no all rutas sueltas 
app.use((req,res) => {
    res.status(400).send("ubicacion no encontrada")
})

app.listen(3000, (req,res) => {
    console.log("aplicacion corriendo en el servidor 3000")
})