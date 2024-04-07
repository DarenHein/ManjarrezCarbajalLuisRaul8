
// primero vamos a ver la conexion 

const mysql = require('mysql')
const express = require('express')
const app = express() 

const db = mysql.createConnection({
	host : '127.0.0.1',
	user : 'daren', 
	password : '5882',
	database : 'test' 

})

db.connect((error) => {

	if(error){
		console.log(error)
	}else{
		console.log("conexion exitosa")
	}

})

// ahora si emepzamos con express 
app.get('/usuarios' , (req,res) => {
	const consulta = "select * from personas"
	db.query(consulta , (error , resultado) => {
		if(error){
			console.log("no se puedo ejecutar la consulta")
		}else{
			console.log("consulta realizada con exito")
			res.json(resultado)
		}
	})
	//res.json("primer dato mandado")
	// ahora aqui mandaremos los datos de la base de datos 

})

app.listen(3000, () => {

	console.log("aplicacion corriendo en el puerto 3000")

})
