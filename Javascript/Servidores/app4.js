
// ahora manderemos otro dato como respuesta de nuestro 
// server 

// ocupamos la libreria 
const express = require('express')
// creamos nuestra app 
app = express()
// ahraoa daremos la ruta para responder 
app.get('/usuario',(req,res) => {
	// creamos un objeto 
	const usuario = {
		nombre : 'juan',
		edad : 30,
		ciudad : "madrid"
	}
	res.send(usuario)
})
// ahora ponemos la app ala escucha 
app.listen(3000,() => {
	console.log("servidor en escucha en el puerto 3000")
})
