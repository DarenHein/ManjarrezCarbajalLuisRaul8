
// primero exportamos librerias 

const express = require('express')
const app = express()
const pathFile = require('path')

// ahroa ocupamos un midleware que devuelva las solicitudes en json 
app.use(express.json())
// ahora para leer los formualrios tipo html 
app.use(express.urlencoded({extended : true}))


// la ruta que mostrara nuestra pagina web 
app.get('/' , (req,res)  => {
    res.sendFile(pathFile.join(__dirname,'index.html'))
})

// ahora cunado el usuario aprete el boton aparecera esto 
// lelagran los datos aca merengues 

app.post('/registro' , (req,res) => {
    const nombre = req.body.nombre 
    const email = req.body.email

    res.send(`¡Hola, ${nombre}! Tu correo electrónico (${email}) ha sido registrado correctamente.`); // Envia una respuesta al cliente

})
// ahora abrimos el changarro 
app.listen(3000,() => {
    console.log('aplicacion corriendo en el puerto 3000')
})