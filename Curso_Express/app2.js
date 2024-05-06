
// todo aqui vamos a ver los tipos de respuesta res que hay en express 

const express = require('express')
const app = express()

app.get("/" , (req,res) => {
    res.send("hola") // todo send devuelve un archivo plano 
})

app.get("/imagen" , (req,res) => {
    // todo devuelve una imagen dada la ubicacion 
    res.sendFile("./imagen.png" , {
        root : __dirname
    })
})

app.get("/redi" , (req,res) => {
    // todo con res.redirection redirijos a otra ruta 
    res.redirect("/ruta2") // todo mandamos como una cadena la otra ruta 
})

app.get("/ruta2" , (req,res) => {
    // todo aprovechamos para mandar un json y ocupar otro metodo json 
    res.json({
        "nombre" : "Luis",
        "apellido" : "Manjarrez"
    })
})

app.use((req,res) => {
    res.status(404).send("ruta no valida ")
})


app.listen(3000,() => {
    console.log("corriendo en el puerto 3000 ")
})