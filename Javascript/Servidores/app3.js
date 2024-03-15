

// vamos a seguir con la creacion de un servidor con js 

// importamos express 

const express = require('express')

// ahora creamos la app 

const app = express()

// definimos la ruta 

app.get('/',(req,res) =>{

	res.send("hola mundo desde mi server")

})

// ahora preparamos la aplicacion donde estara osea el puerto 

const puerto = 3000

app.listen(puerto , () => {
	console.log ("servidor en ejecucion en el puerto 3000")
})
