//todo vamos a hacer autenfticaciones en express con js 
/**
 * todo esto es importante ya que hay rutas que se deben de protejer 
 * !ya que hay filtraciones de datos
 * 
 * * ocuparemos la libreria -> express-session  
 */

const express = require('express')
const app = express()
const session = require('express-session')

//todo configuracion de express sesion 
app.use(session({
    //todo aca va toda la configuracion de session 
    secret : "mi clave secreta", //! clave que firma sesion 
    resave : false, //! no guardar SINO hay cambios 
    saveUninitialized : false, // todo no crear una secion apra usuarios NO autentificados 
    cookie : {secure : false } //todo cambiar a true en https 
}))

/**
 * todo ok vamos a entedner el concepto su pasmoa por la ruta principal que es / nos mandara un mensaje de hola 
 * ahora si pasmaos por la ruta /obtener_secion directamente nos mandara un usuario no registado por que ??
 * todo el valor de req.session.user es igual a false enteondes nadie a se registrado 
 * todo pero si pasamos por la ruta /sesion al req.sesion.user se le agregara el valor de luis 
 * todo En este caso el usuario se a autentificado y cuando volvamos a pasar por la ruta /obtener_sesion ahora 
 * todo sera un true en este caso nos amndara al if 
 */

app.get('/' , (req,res) => { // todo ruta principal 
    res.send("hola ! ")
})

app.get('/sesion', (req,res) => { // todo ruta de autentificacion 
    req.session.user = "Luis"
    res.send("Usuario registrado")
})

app.get('/obtener_sesion' , (req,res) =>{ // todo ruta que mide si el usuario esta autentificado o no 
    if(req.session.user){
        res.send("Sesión de usuario: ${req.session.user}")
    }else{
        res.send("Usiaro no registrado")
    }
})

app.listen(3000,() => {
    console.log("servidor escuchando !!  ")
})