
// vamos a conectar una base de datos de maria db a un 
// aplciacion de node js 

const mysql = require('mysql')

// ahora configuramos las conexiones 
// como se llama contraseña  
// usuario 
// host 
// constraseña 

const conexion = mysql.createConnection({

	host : '127.0.0.1',
	user : 'daren',
	password : '5882', 
	database : 'Personas',

})

conexion.connect((error)=> {
	if(error){
		console.log("error en la conexcion " , error)
	}else {
		console.log("conexion exitosa")
	}
})
