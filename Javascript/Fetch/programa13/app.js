
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
app.use(express.urlencoded({ extended: true }))
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
	//res.send("respuesta recibida")
	// ahora hacemos la consulra sql 
	let consulta = "select * from alumnos where id = ?"
	conexion.query(consulta , [id] , (error , resultado) => {
		if(error){
			console.log(error)
			res.status(500).send("error en la consulta")
		}else{
			res.json(resultado)
			console.log(resultado)
		}
	})
})
app.get('/todos',(req,res) => {

	// en esta ruta vamos a devilvear los 30 alumnos
	// que se enceuntrar registrados en la base de datos 
	// despues vmaos a mandarlos ala api y esta los tranfromara en 
	// una tabla dinamica 

	let consulta = 'select * from alumnos'
	// ahora hacemos la consulta ala base de datos 
	conexion.query(consulta, (error , resultado) => {
		if(error){
			console.log("no se puedo ejecuatar la consulta")
		}else{
			res.json(resultado)
			console.log(resultado)
		}

	})

})

// mostrar los docentes 
app.get('/docentes' , (req,res) => {
	/*
		en este ruta vamos a mostrar todos los docentes 
		que se encuntran en la base de datos 
		se acaba de crear la tabla docentes con cera de
		10 docetes
	*/
	const consulta = "select * from profesores"
	conexion.query(consulta , (error , resultado ) => {
		if(error){
			console.log("no se pudo realizar la consulta")
		}else{
			res.json(resultado)
		}
	})

})

// ahora vamos a crear la ruta para los post de la los usuarios 
app.post('/comunicados', (req,res) => {

	var nombre = req.body.nombre
	var mensaje = req.body.mensaje

	console.log(nombre)
	console.log(mensaje)

	const consulta = 'insert into comunicados(nombre,mensaje) values (?,?)'
	
	// emepzamos el query 
	conexion.query(consulta , [nombre] , [mensaje] , (error,resultado) => {
		if(error){
			console.log(error)
		}
	})

})
module.exports = app
