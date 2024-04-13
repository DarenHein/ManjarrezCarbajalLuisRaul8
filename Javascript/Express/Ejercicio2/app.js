
// ejercicio de practica de servidor en js 

const express = require('express')
const app = express()

// ahora conectamos el inicio 

app.get('/' ,(req,res) => {

	res.send("hola mundo desde mi server ")
})

app.listen(3000 , () => {

	console.log("aplicacion corriendo en el puerto 3000")

})
