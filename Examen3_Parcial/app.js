// creacion de el servidor 

const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const mysql = require('mysql')


// midlewares 

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public", "image")));

app.use(cors())


const conexion = mysql.createConnection({
	host : "127.0.0.1",
	user : "daren",
	password : "5882",
	database : "tienda" 

})

conexion.connect((error) => {
	if(error){
		console.log("error en la coenxion ")
	}else{

		console.log("coenxion exitosa")
	}
})

app.get('/',(req,res) => {
	res.sendFile(path.join(__dirname,"public","index.html"))
})

// ruta dinamica que dependiendo de la figura seleccionada en el html carga los elementos de la 
// base de datos

app.get('/mostrar/:nombre' , (req,res) => {

	var nombre = req.params.nombre 
	switch(nombre){
		case "lufy" :
			var id = "FIG001" 
		break;
		case "boa" : 
			var id = "FIG005"
		break;
		case "nezuco" : 
			var id = "FIG002"
		break;
		case "goku" : 
			var id = "FIG004"
		break;
		case "naruto" : 
			var id = "FIG003"
		break;
		default : 
			console.log("opcion invalida")
		break; 
	}

	// y dependiendo del id aremoa la consulta
	const consulta = "select * from figura where ID_figura = ?"
	conexion.query(consulta , [id] , (error,resultado) => {
		if(error){
			console.log("error en consulta")
		}else{
			res.json(resultado)
			console.log(resultado)
		}
	})

})


module.exports = app 
