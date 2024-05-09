
// vamos a oucapr el libreria morgan con solo un aprametro que es el dev 

const express = require('express')
const app = express()
const morgan = require('morgan') // importamos morgan 

app.use(morgan()) // este es el metodo mas basico de morgan
// suagregamos el aprametro 'dev' nos devuelve una version simplificada 
// ejemplo : app.use(morgan('dev')) 

app.get("/", (req,res) => {
	res.send("hola mundo")
})

app.listen(3000 , () => {
	console.log("aplicacion corriendo en el puerto 3000")
})


