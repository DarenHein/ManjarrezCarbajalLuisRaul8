
// aqui va el servidor 


// importaciones
const express = require('express') // para crear el server 
const app = express() // instancia
const bodyparse = require('body-parser') // para los daytos de json a objetos
const cors = require('cors')// para el navegador


app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(express.json())

// ruta que tomara los datos 
app.post('/ruta', (req,res) => {

	const datos = req.body // almacenamos los dato en la variable datos
	console.log(datos) 
	console.log("datos recibidos con exito")

})

app.listen(3000,() => {
	console.log("aplicacion corriendo en el puerto 3000")
})
