/**
 * 
 ____    _    ____  _____ _   _ 
|  _ \  / \  |  _ \| ____| \ | |
| | | |/ _ \ | |_) |  _| |  \| |
| |_| / ___ \|  _ <| |___| |\  |
|____/_/   \_\_| \_\_____|_| \_|
                                
ahora desde express y un html y una base de datos 
llenaremos esta ultima desde html 

 */

//documentare todo 
const mysql = require('mysql')
const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())

// hacemos la conexion con la base de datos 
const conexion = mysql.createConnection({

    host : '127.0.0.1',
    user : 'daren',
    password : '5882',
    database : 'db'
})

// ahora veremoc si la conexion es exitosa 
conexion.connect((error) => {

    if(error){
        console.log(error)
    }else{
        console.log('conexion exitosa')
    }

})

// pero primerp debemos mostrar la pagina 
app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname,'index.html'))
})

// ahora hacemos la ruta con la html 
app.post('/usuarios' , (req,res) => {
    // Tomamos los datos del cuerpo 
    const nombre = req.body.nombre;
    const email = req.body.email;
    // Hacemos la consulta 
    res.send(nombre)
    res.send(email)

    const consulta = 'INSERT INTO perdonas(nombre, email) VALUES (?, ?)';
    // Ahora ejecutamos el query
    conexion.query(consulta , [nombre, email] , (error, respuesta) => {
     if(error){
         res.send(error);
     } else {
         res.send('Usuario ingresado con éxito');
     }
    });
 });

// ponemos la app en escucha 
app.listen(3000 , () => {
    console.log('aplicacion corriendo en el puerto 3000')
})