
// todo seguimos ocn los params de express 

const express = require('express')
const app = express()


// todo pidienmdo un parametro solamente 
app.get('/nombre/:nombre' , (req,res) => {
    var nombre = req.params.nombre
    console.log(nombre)
})

// todo ahora devolveremos dos parametros pero en una sola varible 
app.get("/nombre2/:nombre/:apellido" , (req,res) => {
    var  nombre = req.params.nombre
    var apellido = req.params.apellido
    console.log(nombre)
    console.log(apellido)
})

app.use((req,res) => {
    console.log("ruta desconocida")
})

app.listen(3000,() => {
    console.log("aplicacion corriendo en el puerto 3000")
})