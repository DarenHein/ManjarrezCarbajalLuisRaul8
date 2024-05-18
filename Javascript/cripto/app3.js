//masterofpuppets

// tenermos que trarformas a mayusuclas y de ahi sacar el md5 hash 

const crypto = require('crypto')

const mensaje = "MASTEROFPUPPETS"

const hash = crypto.createHash('md5')

hash.update(mensaje)

const hexa = hash.digest('hex')

console.log(hexa)
