
// aplicaicon en expres 
const fs = require('fs')
const express = require('express')
const path = require('path')
const app = express()

// ahora creamos el middlewre static 
app.use(express.static(path.join(__dirname,'public')))

// ahora se viene el midleware 
app.use((req,res,next) => {
	
	const pathfile = path.join(__dirname , 'public' , 'index.html')
	if(fs.existsSync(pathfile)){
		next() // pasamos al otro midleware si existe 
	}else {
		res.status(500).send('nose pudo acceder al servicio')
	}
})

// si existe el archivo lo manda para aca 
app.get('/' , (req,res) => {
	res.sendFile(path.join(__dirname,'public' , 'index.html'))
})

module.exports = app 
