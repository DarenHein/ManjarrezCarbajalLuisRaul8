
// prueba con la api de placeholder 
// hago mi propio server pra reforzar lo que tengo 

const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname,"public")))

// para que nos mande ala pagina principal

app.get("/", (req,res) => {

	res.sendFile(path.join(__dirname,"public","index.html"))
})

app.listen(3000 , () => {

	console.log("aplicacion corriendo en el puerto 3000")
})
