
/*
	ahora manejaremos una autentifiucaciuon basica para que no se pueda 
	accceder a otras rutas de nuestro server con el uso de un middleware 
*/

const express = require('express')
const app = express()

// en dado caso uqe necesitmeos una ruta que no necesite nada de autentificacion ni nada podemos subirla antes de los midlewares 
app.get('/' , (req,res) => {
	res.send("ruta sin necesitada de autentificar")
}) // NOTA ESTO DEBE DE IR DEBAJO DEL LOGGER PARA LLEVAR UN MEJOR CONTROL DE DE QUIEN ENTRA ALAS RUTAS 


// primero necesitamos eel midleware del loggin 
app.use((req,res,next) => {
	console.log("Correo intentando ingresar -> " , req.query)
	console.log("Ruta -> " , req.url)
	console.log("Methodo -> " , req.method)
	next()
})
// ahora aremos una ruta de autentificacion 
app.use((req,res,next) => {
	var peticion = req.query.correo
	if(peticion == "hola"){ // si el query es correcto conel que se encuentra aqui 
		console.log("correo aceptado") // mostrara esto 
		next() // y mandara ala ruta correspondiente
	}else{
		 res.send("no autorizado") // en dado casoe que no sea mandara una respuesta de no autorizado 
	}
})

app.get('/user' , (req,res) => { // si no a pasado la autenficacion NO  llefara aca 
	res.send("profile")
})


app.listen(3000,() => {

	console.log("aplicacion corriendo en el puerto 3000")

})
