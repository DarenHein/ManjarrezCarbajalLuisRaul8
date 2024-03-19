

// las expresopnes refgulares en express son sencillamente filtros que van en la url 
// una de susu caracteristicas es que llevan funciones en el req y res 

// un ejemplo sencillo de expreciones regulares 

const express = require('express')
const app = express() 

// creamos la ruta que llevara la exprecion regular 

app.get('/hola/', function(req,res) { //aqui no va la flechita => 

	res.send('hola') // si el usuario ingresa un hola como expresion lo mandara aca y se mostrara el mensaje

})

app.listen(3000 , () => {
	console.log('e; server esta en el puerto 30000')

})
