const express = require('express')
const app = express()

app.get('/productos',(req,res) => {
  res.status(200).send("mostrando productos")
})

app.post("/productos" , (req,res) => {
  res.status(202).send("mandando un producto")
})

app.put("/productos" , (req,res) => {
  res.status(202).send("actualizando todos los productos")
})

app.delete("/productos",(req,res) => {
  res.status(202).send("eliminando un producto")
})

app.patch("/productos",(req,res) => {
  res.status(202).send("actualizando un producto")
})

app.use((req,res) => {
  res.status(404).send("respuesta no valida")
})

app.listen(3000,() => {
  console.log("aplicacion corriendo en el puerto 3000 ")
})