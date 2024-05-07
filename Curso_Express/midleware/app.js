
// vamos a ocupar el midl;eware basico que pase siimpre por esa ruta antes que 
// en las demas 

const express = require('express')
const app = express()


// primer antes de entrar en cualquier ruta pasa por aqui 
app.use((req,res,next) => {
	console.log('paso por aqui')
	// con este metodo de abajo llevamos un logger de la app 
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
	next()
})

// dependiendo conm el uso de next es cuando ya sale y pasa para aca 
app.get('/info' , (req,res) => {
	res.send('show info')
})

// pero ahora vamos a ocuapr otro midle ware q ocupamos antes que es cuando 
// no existe la ruta 
app.use((req,res) => {
	res.send('ruta no encontrda')
})

app.listen(3000,() => {
	console.log('aplicacion correendo en el puerto 3000')
})
