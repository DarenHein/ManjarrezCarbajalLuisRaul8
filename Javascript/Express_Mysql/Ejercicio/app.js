
/*



 ____                       
|  _ \  __ _ _ __ ___ _ __  
| | | |/ _` | '__/ _ \ '_ \ 
| |_| | (_| | | |  __/ | | |
|____/ \__,_|_|  \___|_| |_|
                            

una app con exporess que esta conectada a una base de datos 
en mariadb 

ocupa el metodo post para recoleccion de datos 

importante no mames los midleware globales hdpt que se me olvvida 

*/

// librerias 
const mysql = require('mysql')
const express = require('express')
const path = require('path')

const app = express()

 // ajpra lso putos midleware 

app.use(express.json()) // pa que lo que mande el cuerpo sse transform de json a objeto 
app.use(express.urlencoded({extend : true})) // igual pero este ees para decofificar lso datos que vienen en la url 

// ahora configuramos la bade de datos 

const conexion = mysql.createConnection({

	host : '127.0.0.1',
	user : 'daren',
	password : '5882',
	database : 'db'

 })

// verificamos si la abse de datos se conecto con exito 


conexion.connect((error) => {
	if(error){
		console.log('error en la conexion de la base de datos' , error)
	}else {
		console.log('conexion exitosa')
	}

})
