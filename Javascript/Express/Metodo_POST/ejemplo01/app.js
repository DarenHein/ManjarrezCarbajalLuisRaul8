// metodos http 
// post es como interavcctua el clinte navegador con nuestra aplicacion 

// en este ejemplo aremos de uso de un html ocn un formulario 
// para que el formulario mande la informacion y el app nos lo recoja 

// incluidmos l;a lubreria 

const express = require('express')
const app = express()

// mas adelanter vere que es un middleware 
// mientras lo ocupamos 
app.use(express.urlencoded({extended : true}))

// ahora si manejamos el post 
app.post('/login',(req,res) => {


    // ahora tommamos lo que nos alla mandado 
    const nombre = req.body.username 
    const password = req.body.password 

    res.send(`Hola ${nombre}`);
})

// esto tampoco lo entiendo bien pero ocuapmos otro midleware para un html 
app.use(express.static('public'))

// ahpora abrimos el negocio jajaj 
app.listen(3000,() => {


    console.log('servidor corriendo en el puerto 3000')
})
