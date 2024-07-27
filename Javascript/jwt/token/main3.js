const jwt = require('jsonwebtoken')
require('dotenv').config()

const llave = process.env.llave

const payload = {
    nombre : "Luis",
    edad : 30
}

const token = funcion(payload,llave)

console.log(token)

function funcion(payload,llave){
    const token = jwt.sign(payload,llave,{expiresIn : '1m'})
    return token
}

