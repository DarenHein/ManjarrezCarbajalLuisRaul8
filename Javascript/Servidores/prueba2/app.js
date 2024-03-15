
// vamos a hacer que nuestro servidor cunado accedan a tal puero de la pagina 
// despligue la pagina web 

// necesitamos la libreria express 
const express = require("express")
// necitamos la libreria path 
const path = require('path')
// neceitsmoa la app 
const app = express()
// ñe damos direccion ala pagina 
app.get('/',(req,res)=>{

	res.sendFile(path.join(__dirname,'index.html'))
	/*
	Explicacion de la linea de codigo arriba 
	res.sendFile = da como respuesta un archivo 
	
	__dirname = proporciona la ruta del archivo 
	path.join = junta dos parametros 
	*/
})

// abrimos el changarro 
app.listen(3000,() => {
	console.log("Servidor activo en el puerto , 3000")
})

