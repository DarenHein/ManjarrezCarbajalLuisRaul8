

// vamos a ocuapr el midleware de forma global 
// static sirve apra el uso de archivos crudos o planos 

const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname,'public'))) // con esto señalamos que el midleware estara ubicaco 
// en la carpeta donde esta el script dentro de la carptea public 

app.get('/imagen/:id' , (req,res) => {

	const valor = req.params.id 

	res.sendFile(path.join(__dirname ,"public",valor ))


})

module.exports = app 


