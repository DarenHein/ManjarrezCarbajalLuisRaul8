
// ahora vamos a intenter conectar mi base de datos a un aplicacion de javascript 
// necesitamos dos extenciones express y mysql 

const express = require ('express')
const mysql = require('mysql') // necesitamos la libreria 

// ahora conectamos la base de datos con el script 

const app = express()
const puerto = 3000

// ahora creamos la conexion 

const db = mysql.createConnection({ // primero creamos la conexion 
	host : "127.0.0.1", // lo estamos haciendo de forma local 
	user : "daren_h", // el usuatio 
	password : "5882", // la constr 
	database : "Gee", // el nombre de la database 
})

// ahora verificamos si la conecion a sifdo exitosa 

db.connect((err) => { // conectamos 
	if(err){ // si eneuntra un error 
	console.log("Error el intentar conectarse",err)
	}else { // por si no lo encuentra 
	console.log("conexion Exitosa") // fue tan belllo cunado lo viu 
	}
})
