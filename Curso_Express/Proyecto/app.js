// nuestra primera aplicacion apirest con express 

const express = require('express')
const app = express()
const morgan = require('morgan')

// creamos el midleware de logger con morgan 
app.use(morgan())

app.get('/' , (req,res) => {

	res.send("hello word")

})

app.listen(3000,() => {

	console.log("aplicacion corriendo en el puerto 3000")

})
