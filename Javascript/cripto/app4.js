const crypto = require('crypto')

const mensaje = "recuerdaquebase64NOescifrar"

const hash = crypto.createHash('md5')

hash.update(mensaje)

const hexa = hash.digest('hex')

console.log(hexa)
