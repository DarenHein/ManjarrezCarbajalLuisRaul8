

// aqui ira la aplicaicon de express que al ingrear ala ruta nos devolvera la aplicaion web 

const express = require('express')
const app = express()
const path = require('path')
4
// primero te marcare la ubicaion de los archivos con path 

app.use(express.static(path.join(__dirname,'archivos'))) 
/**
 * 
 * use se poucap en el midleware 
 * espress stitc es un midleware que decvulce un archivo estaico 
 * pathjoin junta direcciones e
 * __dirname nos da la ubicaion actual donde el srcit corre 
 */

app.get('/calculadora' , (req,res) => {
	
	res.sendFile(path.join(__dirname,'archivos','index.html')) 
	// esta ruta devolvera la ubicacion actual ahora archivos es una direccion y selecionamos el archuivo que es index.html 
})

const PORT = 3000 

app.listen(PORT,() => {
	console.log('servidor escuchando en el puerto 3000 ')
})
