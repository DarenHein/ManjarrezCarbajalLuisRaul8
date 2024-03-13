

// ahora aremos una conexion con una base de datos para seguir practicando 

const mysql = require('mysql')

const conexion = mysql.createConnection({

	host : '127.0.0.1',
	user : "daren_h",
	password : "5882",
	database : "hola",
})

// ahora la conectamos ala base de datos 

conexion.connect((error) => {
	if(error){ // si es verdadero elerror marca  que no puede entrar 
		console.log("conexion fallid",error)
	}else { // en caso contratio de que si este la base de datos podemos hacer querys 
		console.log("conexion exitosa") 
		const dato = "luis" // el datoque ingresaremos 
		const query = "insert into personas(nombre) values(?)"
		// en este caso la consulra es agregar un elemento ala 
		// tabla ya exitente 
		conexion.query(query,[dato],(error,resultado) =>{
			if(error){
				console.log("error al ingresar dato " , error)
			}else {
				console.log("dato agregado con exito")
			}

			conexion.end()
		})
	}

})




