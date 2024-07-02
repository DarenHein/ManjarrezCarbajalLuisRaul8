/*
manejo de errores en exoress este se ocupa cuando el sercidor no peude dar una respuesta adecuada 
y se produce un error nuestro trabajo es tratar de manejar el erro de la mejor forma posible 

*/

const express = require('express')
const app = express()

app.use((req,res,next) => {
	console.log("midleware de gestion antes de que llegue al routing")
})

app.listen(3000, () => {
	console.log("apliaciaon corriendo en el puerto 3000")
})
