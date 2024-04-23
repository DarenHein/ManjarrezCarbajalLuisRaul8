// creacion de el servidor 

const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const mysql = require('mysql')


const conexion = mysql.createConnection({
	host : "127.0.0.1",
	user : "daren",
	password : "5882",
	database : "tienda" 

})

conexion.connect((error) => {
	if(error){
		console.log("error en la coenxion ")
	}else{

		console.log("coenxion exitosa")
	}
})

app.use(cors())

app.get('/',(req,res) => {
	res.send("hola mundo")
})

module.exports = app 
