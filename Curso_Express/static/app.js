
// archivos estaticos en express 
// son para servir archivos como pdf html etc 

const express = require('express')
const app = express()
const morgan = require('morgan')

// primero las settings 
app.set('name' , 'aplicacion')
app.set('port' , '3000')
app.set('case sensitive routing' , true)

// ahora los midleware 
app.use(morgan('dev'))
app.use((req,res,next) => {
	console.log("paso por aca")
	next()
})
// ahora a l;o que venimos el midleware de artchivos estitcos 
app.use('/public', express.static('public'))

// ahora una ruta que devuelva el index.html 

app.get('/' , (req,res) => {
	res.send('ruta raiz del sercvidor')
})

app.use((req,res) => {
	res.send("ruta no valida")
})

app.listen(app.get("port") , () => {
	console.log("aplicacion corriendo " , app.get('name') , "en el puerto : " , app.get("port"))
})
