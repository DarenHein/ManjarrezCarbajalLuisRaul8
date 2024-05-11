
const express = require('express')
const morgan = require('morgan')
const app = express()

// antes de cualquier cosa van los settings 
app.set("name" , "Mi Server")
app.set("port" , "3000")
app.set("case sensitive routing" , true) // si las rutas no se escriben bien marca error 

// ahora los midleware 
app.use(morgan('dev'))
app.use((req,res,next) => {
	console.log("paso por aca")
	next()
})

// ahora las rutas 
app.get('/Usuario',(req,res) => {
	res.send("Ruta de los Usuarios")
})

// ahora el midleware cunado no existe la rutra
app.use((req,res) => {
	res.status(404).send("pagina no encontrada")
})

// ahora corremos la aplicacion 
app.listen(app.get("port") , () => {
	console.log("aplicacion" , app.get("name") , "corriendo en el puerto : " , app.get("port"))
})

