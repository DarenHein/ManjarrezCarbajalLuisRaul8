// ahora con express vamos a crear un sever que refleje 
// la carptea de imagenes que tenemos en alojada 

// librerias que ocupare express y path 
const express = require('express')
const path = require('path')
// ahora creamos la app 
const app = express()

app.use(express.static(path.join(__dirname,"imagenes")))

// ahora le damos la raut ala app 
app.get('/' , (req,res) => {

	res.send("aqui estan mis arhchivos")
})

// ahora abrimos la chamba 
app.listen(3000,() => {
	console.log("servidor corriendo en el puerto 3999")
})

/*
middleware = hay qeu verlos como estaciones de trabajo que cumplen una funcion 

analogia es una fabrica de carros (servidor)
esta fabrica de carros tiene secciones apra cada area de la 
chamba (middle ware) 

en este caso express.static es un middle ware que gestiona archivos estiticos 
*/
