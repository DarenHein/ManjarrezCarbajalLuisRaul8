
// aqui vamos a conectar un serdor basico 

// vamos a presentar que nuestro server presente un  presente el libro 


const express = require('express')
const path = require('path')
// hacemos la instancia de la app 

const app = express()

const pathPublic = path.join(__dirname,'Archivos')

// ahora indicamos la ruta de la app 

app.get('/',(req,res) => {

	res.sendFile(path.join(pathPublic,'libro.pdf'))

	
})

// ahora abrimos el server 

app.listen(3000,() => {

	console.log("server tranajamdp en el puerto 3000 ")
})

// awiwiwiwiwiwi quedo 
