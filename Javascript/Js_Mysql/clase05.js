

// ahora vamos a cerrras la conexion con la base de datos desde js 
// cada conmsulta o combinaciond e consultas que hagamos devemos cerrar 

const mysql = require('mysql')

const conexion = mysql.createConnection({

	host : '127.0.0.1',
	user : 'daren',
	password : '5882',
	database : 'Personas'

})

conexion.connect((error) => {

	if(error){

		console.log('error en la xonexion')
	}else {
		console.log('conexion exitosa')
	}

})

// ahopra aremos una consolta basica 

const consulta = 'select * from persona'

// ahora hacemos el query 

conexion.query(consulta,(error,resultado) => {

	if(error){
		console.log('no se puedo realizar la consulta')
	}else {
		console.log('consulta realizada con exito', resultado)
	}

})
 // ahora ya que hiximos todo lo que s epodia cerraremos la conexion con la database 

conexion.end((error) => {

	if(error){
		console.log('error al cerrar la conexion ')
	}else {
		console.log('Adios')
	}

})
