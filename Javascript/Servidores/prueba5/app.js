
/*

 ___
|  _ \  __ _ _ __ ___ _ __  
| | | |/ _` | '__/ _ \ '_ \ 
| |_| | (_| | | |  __/ | | |
|____/ \__,_|_|  \___|_| |_|

Servidor de practica 

*/

const express = require("express")
const path = require("path")

// ahora creamos la instancia de nuestra app 
const app = express()

// ahroa sacamos en una variable la unicacion de los documentos 

const publicPath = path.join(__dirname , 'archivos')

// ahora cuando entre en la pagina principal de nuestro servidor 

app.get('/',(req,res) => {
	res.sendFile(path.join(publicPath,'index.html'))
})

// ahora le decimos al servidor que pasa si pasa por otra ruta 

app.get('/verduras',(req,res) =>{
	
	res.sendFile(path.join(publicPath,'verduras.html'))

})

// ahroa levantamos el servidor donde lo queramos 

const puerto = 3000 

app.listen(puerto, () => {
	console.log("servidor corriendo en le puerto 3000")
})
