
/*

	en este apartado ocuapremos el metodo post para leer lo que nuestro 
	cliente nos pide hay varias formas de leer datos que nos manda el cliente 
	y tambien el clinet tiene multiples formas de mandar datos 
*/

const express = require('express')
const app = express()

// necesitamos los metodos que permitan leer texto json y formularios 
app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extend : true}))

// ahroa creamos un metodo post que lee lo que manda el lciente 
app.post('/cliente' , (req,res) => {
	console.log(req.body)
})


app.listen(3000 , () => {

	console.log("aplicacion correindo en el puerto 3000" )

})
