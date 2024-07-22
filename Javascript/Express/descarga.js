// vamos a ocuapr el res.download pra descarga de archivos por servidor 

const express = require('express')
const app = express()
const path = require('path')

app.get('/Descarga' , (req,res) => {

	// primero necesitamos la ubiacaion del archivo 
	const file = path.join(__dirname,"yo_merengues.jpeg")
	res.download(file,"yo_merengues.jpeg" , (error) => {
		if(error){
			console.log("error al desacrgar " , error)
		}else{
			console.log("exito")
		}
	})

})

app.listen(3000,() => {
	console.log("apliaciaon corriendo en el puerto 30000")
})
