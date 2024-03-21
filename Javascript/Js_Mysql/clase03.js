

// ahora vamos a insertar un dato desde nodejs ala base de datos 

const mysql = require('mysql')

const conexion = mysql.createConnection({

	host : '127.0.0.1',
	user : 'daren',
	password : '5882',
	database : 'Personas'

})

conexion.connect((error) => {
	if(error){
		console.log('error en la conexion' , error)
	}else {
		console.log('conexion exitosa')
	}

})

// ahora vamos a leer los datos de la bvase de datos 


conexion.query('select * from persona' , (error,resultado) => {
	if (error){
		console.log('errro en leer la consulta')
	}else {
		console.log('la respuesta es ' , resultado)
	}

})

// ahora vamos a insertar un dato 

const dato = 'Kevin'
const consulta = 'insert into persona(nombre) values(?)'

// ahora si hacemos la query 

conexion.query(consulta , [dato], (error,resultado) => {
	if(error){
		console.log('error en la consulta' , error)
	}else {
		console.log('consulta realizada con exito ')
	}

})
