
//todo importamos las libreria pra el token
const jwt = require('jsonwebtoken')
require('dotenv').config()

// la clave secrete es la que firma el token esta se suma con el payload y con un hash sha256 crea un token 
const clave_secreta = process.env.llave // calve sacada de un env varible de entorno
console.log(clave_secreta) 
// el psyload es como al informacion que queresmo sumar con el la llave secreta 
const payload = {
    nombre :"luis",
    edad : '30'
}

// crear el token 
const token = jwt.sign(payload,clave_secreta,{expiresIn : '1h'})
// el sing permite crear el token pide 3 parametros el payloaf la clave secreta y una tiempo de expiracion 

console.log(token)
