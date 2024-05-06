
// todo varuables de ruta en express 

/**
 * se ocupan para dar mas dinamismo alas rutas el usuario puede mandar una dato por ella 
 * y nosotros podemos recibirla 
 */

const express = require('express')
const app = express()

app.get("/usuario/:name" , (req,res) => {
    var name = req.params.name
    console.log(typeof(name)) // todos los datos que retorna por la url son String
    res.send(name)
})

app.use((req,res) => {
    res.send("ruta no encontrada")
})

app.listen(3000,() => {
    console.log("servidor corriendo en el puerto 3000")
})