

// aqui vermos el middleware static 
// este nos ayuda a servir archivos crudos 
//
const express = require('express')
const app = express()

// uso de midleware static 

app.use(express.static('carpeta')) // sirve datos de una carpeta que este en 
// el directorio de este script 

app.get('/' , (req,res) => {

	res.send('aplicacion usando midleware static')

})

app.listen(3000 , () => {

	console.log('aplicaion corriendo en el puerto 3000 ')
})
