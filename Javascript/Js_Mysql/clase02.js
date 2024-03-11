

// otro ejejmplo de mysql con js  pero ahora haceindo un query 

// primero importamos 
const mysql = require('mysql')

// configuramos la conexion 
const db = mysql.createConnection({
	host : "127.0.0.1",
	user : "daren_h",
	password : "5882",
	database : "Gee",
})

db.connect((error)=> { // ahora verificamos que se conxion exitosa 

	if (error){ // erro en conexion 
		console.log("Error en conexion" , error)
	}else{ // conexion exitosa 
		console.log("conexion exitosa ")
	}

})

// ahora vamos a jacer la consulta 

const sql = "describe C_link "

// ejecutamos la consulta select 

// asl es la  consulta 
// error es el error resultante almacenado en una variable 
// consulta es el resultado en una variablepero aun no se que tipo de dato es 

db.query(sql,(error,result)  => {

	if(error){
		console.log("error en la consulra " , error )
	}else {
		console.log("resultado de la consulta " , result)
	}
})



