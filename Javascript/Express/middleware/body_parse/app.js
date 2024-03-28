
// aqui aremos la aplicaion con body parse 

const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const app = express()

// ahora los midleware 
app.use(express.static(path.join(__dirname,'public')))
// ahora el body parse 
app.use(bodyparser.json()) // este toma los datos de el cuerpo de la url
// que son de tipo json y los transforma a obj js 
app.use(bodyparser.urlencoded({ extended: true }));
// primero vamos a mostrar la pagina

app.get('/' , (req,res)  => {

	res.sendFile(path.join(__dirname, 'public' , 'index.html'))
})

// ahora creamos la ruta que reciva los datos del formulario 
app.post('/ejemplo' , (req,res) => {
	const nombre = req.body.nombre
	const apellido = req.body.apellido
	console.log(nombre)
	console.log(apellido)
})

// ahora exportamos la ap[lpicaion para que www la ocupe
module.exports = app 
