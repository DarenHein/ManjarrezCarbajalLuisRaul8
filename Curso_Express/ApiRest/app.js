const express = require('express')
const morgan = require('morgan')
const app = express()

// todo midleware de logger 
app.use(morgan('dev'))

// ahora crearemos las rutas get push delete put 
app.get('/productos' , (req,res) => {
    res.send("Mostrando productos")
})

app.post('/productos' , (req,res) => {
    res.send("agregando un producto un producto")
})

app.put('/productos' , (req,res) => {
    res.send("actuaizando productos")
})

app.delete('/productos/:id' , (req,res) => {
    res.send("eliminando un producto")
})

app.get("/productos/:id" , (req,res) => {
    res.send("mostrando un producto")
})

app.use((req,res) => {
    res.send("ruta solicitada no existe")
})

app.listen(3000,() => {
    console.log("aplicacion corriendo en el servidor 3000 ")
})