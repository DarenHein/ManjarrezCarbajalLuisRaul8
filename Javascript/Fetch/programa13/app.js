
// vamos a jugar con una base de datos de my sql 

const express = require('express')
const path = require('path')
const mysql = require('mysql')
const app = express() 

// ahora hacemos la conexion con la base de datos 

const conexion = mysql.createConnection({

	host : '127.0.0.1',
	user : 'daren',
	password : '5882',
	database : 'alumnos'

})

conexion.connect((error) => {
	if(error){
		console.log("error en la conexion")
	}else{
		console.log("conexion exitosa")
	}

})

app.use(express.static(path.join(__dirname,"public")))

// Configuración de CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/',(req,res) => {
	res.sendFile(path.join(__dirname,'public','index.html'))
})

app.get('/alumnos/:alumnos' , (req,res) => {
	var id = req.params.alumnos
	console.log("parametro recibido -> " , id)
	res.send("respuesta recibida")
})

module.exports = app
