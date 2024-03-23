

// ahroa junatremos una base de datos con express 
// y miostraresmos los archivos json sobrantes  como respuesta 

// libreriras 

const mysql = require('mysql')
const express = require('express')
const app = express() 

//c reamos la conexion ala base de datos 

const conexion = mysql.createConnection({

	host : '127.0.0.1',
	user : 'daren',
	password : '5882', 
	database : 'Personas' 

})

//  ahora mostramos la informacion de la base de datos si esta o no conectada 

conexion.connect((error) => {
	if(error){

		console.log('conexion fallida' , error )
	}else {

		console.log('conexion exitosa ')
	}

})

// ahora hacemos la creacion de la rut aih meteremos un select 

app.get('/usuario' , (req,res) => {
	conexion.query('select * from persona' , (error , resultado ) => {
	if(error){
		console.log('error en la realizacion de la consulrtra ' , error )
	}else {

		res.json(resultado) // respondemos con la info solicitada 
	}

})

})
 // ahora cerramos la base de ddatos pero desde el; server 

app.on('close' , () => {

	conexion.close((error) => {

		if(error){
			console.error('error al intentar cerrar ' , error)
			return 
		}
		console.log('database cerrada correctamente')

	})
})

// abrimos el changarro 

app.listen(3000, () => {
	console.log('aplicacion corriendo en el puerto 3000 ')

})
