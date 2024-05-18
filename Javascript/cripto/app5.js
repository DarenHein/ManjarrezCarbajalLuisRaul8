

//D4mpTheH3x! -> tranfromar a md5

const crypto = require('crypto')

const mensaje = "D4mpTheH3x!"

const hash = crypto.createHash('md5')

hash.update(mensaje)

const hexa = hash.digest('hex')

console.log(hexa)
