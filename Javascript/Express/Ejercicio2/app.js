
// ejercicio de practica de servidor en js 

const express = require('express')
const app = express()
const path = require('path')
// ahora conectamos el inicio 


app.use(express.static(path.join(__dirname,'public')))

app.get('/' ,(req,res) => {

	res.sendFile(path.join(__dirname,"public","index.html"))
})

app.get('/imagen' , (req,res) => {

	res.sendFile(path.join(__dirname,"public","b-650.jpg"))

})

app.listen(3000 , () => {

	console.log("aplicacion corriendo en el puerto 3000")

})
