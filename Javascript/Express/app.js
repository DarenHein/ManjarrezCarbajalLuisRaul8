

// vamos a levantar un paqueño server con js node js 

// librerias  express 

const express = require('express')

const app = express()
const puerto = 3000 

// ruta del servidor que estara ala escucha 

app.get('/',(req,res)=>{
	res.send("puto kevin")
})


// ahora iniciamos el seridor 

app.listen(puerto , () => {
	console.log("servidoR escucchando en http://localhost:3000")
})
