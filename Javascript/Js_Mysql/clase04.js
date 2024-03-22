

// ahora vamos a erliminar un dato desde js a mysql 

// necesitamos la libreria 

const mysql = require('mysql')

const conexion = mysql.createConnection({


	host : '127.0.0.1',
	user :  'daren',
	password : '5882',
	database : 'Personas'


})

conexion.connect((error) =>  {

	if(error){

		console.log('error en la conexion de la base de datos')
	}else {
		console.log('conexion exitosa')
	}
})
// aahora vamos a ahcer la conexion 

const consulta = 'delete from persona where nombre=?' 
const dato = 'Luis'

conexion.query(consulta,[dato] , (error,respuesta) => {
	if(error){
		console.log('no se pudo ejecutar la accion', errpr)
	}else {
		console.log('consulta realizada con exito' , respuesta )
	}

})
