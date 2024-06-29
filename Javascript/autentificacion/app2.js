
// todo prosigamos con express session para dorminarlo mejor 

const express = require('express')
const app = express()
const session = require('express-session')

// ahroa las configuraciones del session 
app.use(session({
    secret : 'llave secreta', 
    resave : false , // todo es ara que si no hizo nada no guarde 
    saveUninitialized : false, // todo no crear sesion para usuarios no autentificados 
    cookie : {secure : false}
}))

app.get('/' , (req,res) => {
    res.send("hola")
})
app.get('/sesion' , (req,res) => {
    var nombre = "Luis"
    req.session.user = nombre
    res.send("Sesion iniciada con exito")
})
app.get('/obtener_session' , (req,res) => {
    if(req.session.user){
        res.send("usuario autentificado")
    }else {
        res.send("usuario no autentificado")
    }
})
app.get('/cerrar' , (req,res) => {

    //todo ahroa cerraremos la sesion 
    req.session.destroy(error => {
        if(error){
             console.log("Sesion no de pudo cerrar")
        }else{
            res.send("sesion cerrada con exito")
        }
    })

})

app.listen(3000,() => {
    console.log("aplicacion corriendo en el puerto 3000")
})