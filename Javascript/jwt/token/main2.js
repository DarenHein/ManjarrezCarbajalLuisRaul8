

// todo las llaves secretas se guardan en varibles de entorno env nunca en el codigo 
require('dotenv').config // todo esto nos permite ocupar las varibles de entorno 
const jwt = require('jsonwebtoken')

// lave secreta 
const llave = process.env.llave

// ahora el payload 
const payload = {
    nombre : "Luis",
    edad : 30
}

const token = jwt.sign(payload,llave,{expiresIn : '1m'})

console.log(token)