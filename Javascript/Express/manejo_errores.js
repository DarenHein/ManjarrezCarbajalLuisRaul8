/*
manejo de errores en exoress este se ocupa cuando el sercidor no peude dar una respuesta adecuada 
y se produce un error nuestro trabajo es tratar de manejar el erro de la mejor forma posible 

se crea una midleware que maneje el error pero como mandamos el error te preguntaras 
luis del fuutuo pues con un simple try catch y un next 
el next el try lo ocuparemos para tomar el error y el midlwware apra gestonarlo 

*/

const express = require('express')
const app = express()

app.use((req,res,next) => {
	// midlwware de gestion de solicitudes 
	console.log("midleware de gestion antes de que llegue al routing")
	next()
})

// routing 
app.get('/',(req,res,next) => {
	res.send("ruta home")
})
app.get('/user/:id' , (req,res,next) => {
	try{
		var user = req.params.id
		res.send("hola",user)
	}catch(error){
		next(error)
	}
})

// midleware manejo de errores 
app.use((err,req,res,next) => {
	console.log(err.stack)
	res.status(500).send("error en recibir la solicitu")
})


app.listen(3000, () => {
	// arranque del server 
	console.log("apliaciaon corriendo en el puerto 3000")
})
