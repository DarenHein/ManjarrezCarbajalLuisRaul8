

// aqui aremos una consulta ala base de datos 

const mysql = require('mysql')
const conexion = mysql.createConnection({
	host : '127.0.0.1',
	user : 'daren',
	password : '5882',
	database : 'Personas'
})

conexion.connect((error) => {
	if(error){
		console.log('error en la conexion de la base de datos')
	}else{
		console.log('conexcion exitosa')
	}

})
// este es para leer los datos de la tabla 
conexion.query('select * from persona' , (error,respuesta) => {

	if (error){
		console.log('error al tratar de hacer la consulta')
	}else {
		console.log(respuesta)
	}
})
