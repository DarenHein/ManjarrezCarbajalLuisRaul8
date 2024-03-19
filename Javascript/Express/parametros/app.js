

// aplicaion basica de parametros en js cons express 

// lso parametros de ruta snos ayudan a ahcer nuestras rutas mas 
// dimammicas en el sentido que recojen un dato 
// la mayoria son parametros opcionales 

const express= require('express')
const app = express()

app.get('/user/:id' , (req,res) => {
	const id = req.params.id
	res.send(id)

})

app.listen(3000,() => {
	console.log('exuchando en el puerto 3000')

})
