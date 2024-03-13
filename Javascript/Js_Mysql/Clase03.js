

// otro ejejmplo de conexion a una base da datos pero en este 
// caso ingresaremos un dato ala base de ddatos des de node js 

const mysql = require('mysql')

// creamos la conecion 

const conexion = mysql.createConnection({

	host : "127.0.0.1",
	user : "daren_h",
	password : "5882",
	database : "Gee"
})

conexion.connect((error) =>{

	if(error){
		console.log("Error en la coexion " , error )
	}else {
		console.log("Conexion Exitosa")
	}
})
