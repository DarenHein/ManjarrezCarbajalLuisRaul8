// primero importamos 
const crypto = require('crypto')

// despues creamo el objeto hash 

const hash = crypto.createHash('sha256')

const mensaje = "ThisIsAMoreSecureHashFunction"

hash.update(mensaje)

const hexa = hash.digest('hex')

let mensaje2 = hexa

const hash2 = crypto.createHash('md5')

hash2.update(mensaje2)

const hexa2 = hash2.digest('hex')

console.log(hexa2)

//console.log(typeof(hexa))
