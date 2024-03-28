

// vamos a ahcer un server rapido para probar el www de bin 
//
const express = require('express')
const app = express()

app.get('/' , (req,res) => {

	res.send("hola mundo")

})
module.exports = app  /7 con esto decimos que pordemos exportar app 
