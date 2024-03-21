

/*

Crea una aplicación Express que tenga una ruta para validar si un nombre de usuario cumple con ciertos criterios. Los criterios para un nombre de usuario válido son los siguientes:

    Debe tener entre 4 y 10 caracteres de longitud.
    Solo puede contener letras minúsculas, números y guiones bajos.

Tu tarea es escribir el código para esta aplicación Express. Aquí hay un esqueleto básico para comenzar:

*/

const express = require('express')
const app = express()

app.get('/user/:id', (req,res) => {
	// pri,mero tomamos el dato 
	const dato = req.params.id 
	// ahora la expresion regular que limita el nombre del usuario 
	const expresion =  /^[a-z0-9_]{4,10}$/
	const validacion = expresion.test(dato)

	// ahora validamos si esta bien 
	if(validacion){
		res.send('la aprobacion a sido un exito')
	}else {
		res.send('nel perro')
	}
	res.send('validacion a sido un exito')
})

// ahora m,andamos a llmar al puerto 

app.listen(3000,()=> {
	console.log('aplicaicion corriendo en el puerto 3000')
})
