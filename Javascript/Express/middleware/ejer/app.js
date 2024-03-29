

// aplicaion que con un custionario revisa que si estra en 
// obj un libro

const express = require('express')
const path = require('path')
const app = express()
const bodyparse = require('body-parser')

// creamos las midle
// empezamos con el static 

app.use(express.static(path.join(__dirname,'public')))
// ahora el midleware de paerse 
app.use(bodyparse.urlencoded({extended : true}))

// diccionario de pelciulas que tenemos disponibles 

const peliculas= {
	'El Exorcista' : {
		'nombre': 'El exorcista' , 
		'año' : 1998 , 
		'genero' : 'terror '
	},
	"el memelas" : {
		"nombre" : "el memelas",
		"años" : 1992, 
		"genero" : "porno"
	}
}


// ahora creamos la ruta que cunado solicite por url muestr nuestro formulario 
app.get('/' , (req,res) => {
	
	res.sendFile(path.join(__dirname , 'public' , 'index.html'))
})
// con lo de arriba muestra el formulario en index html ahora 
// si el usuario ingresa o rellena el fromualrio lo mandamos a esta estxncion 

app.post('/form' , (req,res) => {
	const nombre = req.body.nombre
	if (nombre in peliculas){
		res.send(200,'<h1>La pelicula existe</h1>')
	}else{
		res.send(200,'<h1>La pelicula no existe</h1>')
	}
})

module.exports = app 

