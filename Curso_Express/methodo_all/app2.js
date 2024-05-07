

// vamos a atrabajar con la all el metodo 
/*
	el metofo next quye va en  req y res es el que se encarga de mandar 
	cuando entra en el all 
	sin el se atasca en el all 
*/


const express = require('express')
const app = express()

app.all('/usuarios' , (req,res,next) => {

	console.log('estamos el el metodo all')

	// no ocuapremos el midleware next haber que pasa
	// si no lo ponemos se atasca aca y no manda a otra ruta
	//next()
})

app.get('/usuarios' , (req,res) => {
	res.send('hola mundo desde el metodo get ')
})

app.listen(3000,() => {

	console.log('aplicaion corriendo en el servidor 3000')

})
