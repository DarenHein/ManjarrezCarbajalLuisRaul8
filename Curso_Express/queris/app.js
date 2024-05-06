
/*

  ___                  _           
 / _ \ _   _  ___ _ __(_) ___  ___ 
| | | | | | |/ _ \ '__| |/ _ \/ __|
| |_| | |_| |  __/ |  | |  __/\__ \
 \__\_\\__,_|\___|_|  |_|\___||___/
                                   

Ejemplo de queries en express 
	se ocupan cuando el clinete tiene un dato en especifico del server

*/

const express = require('express')
const app = express()

app.get('/ruta' , (req,res) => {
	// como si fuera un params tomamos lo que nos mande el cliente 
	var oferta = req.query.oferta
	console.log(oferta)
})

// tambien podemos ocncatenar varias consultas al server 
app.get('/ruta2' ,(req,res) => {
	var oferta = req.query.oferta
	var marca = req.query.marca

	console.log(oferta)
	console.log(marca)
})

app.listen(3000,() => {
	console.log("aplicacion corriendo en el puerto 3000")
})
