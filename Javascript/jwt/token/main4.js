// todo ahroa aremos lo validar el token por lo que veo ya ocuamos express jwt y donenv par aempezar a validar rutas o protegerlas 

const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const path = require('path')
const cors = require('cors')
const app = express()

app.use(express.urlencoded({extended : false }))
app.use(express.json())
app.use(cors())

app.get('/info' , (req,res) => {
    res.json({
        nombre : "Luis"
    })
})

// primero necsitamos que el cliente se logee apra darle un acces token 
app.get('/login',(req,res) => {
    res.sendFile(path.join(__dirname,"public","index.html"))
})

app.post('/aunt',(req,res) => {
    const {name , email} = req.body
    console.log(name)
    console.log(email)
    // hacemos validaciones de base de datos 
    
    // hacemos el payload 
    const user = {
        nombre : name,
        email : email
    }

    const token = crearToken(user)

    console.log(token)

    res.json(token)
})

// funcion que crea el token 
function crearToken(user){

    // ncesitamos nuestra calve secreta 
    const llave = process.env.llave
    // creamos el token 
    const token = jwt.sign(user,llave,{expiresIn : '10m'})
    return token

}

app.listen(3000,() => {
    console.log("Server corriendo ...")
})