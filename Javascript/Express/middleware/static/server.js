

/*
 *ahora vamos a ocuapr el midl;eware static para acceder ala carpetas imagenes 
 cada final de ruta con un parametro 
 * */

// librerias 
const express = require('express')
const app = express()
const path = require('path')

// creamos el midleware 
//
app.use('/imagenes',express.static(path.join(__dirname,'imagenes')))

// esta line de arriba el p[irmer parametro que simpore que se acceda a imgenes ruta 
// siempre devolvera un archivo plano 
//
// ahora creamos la ruta con un metodo get 
app.get('/imagenes/:imagen' , (req,res) => {

	const imagen = req.params.imagen 
	res.sendFile(path.join(__dirname , 'imagenes' , 'imagen'))

})

// abrimos el local 
app.listen(3000,() => {
	console.log('cplicaion corriendo en el puerto 3000')

})
