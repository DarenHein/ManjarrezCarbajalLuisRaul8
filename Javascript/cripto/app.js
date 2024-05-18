// primero exportamos la libreria 
const crypto = require('crypto')

// definidmos el emnsaje que queramos 
const mensaje = "LearnTheHashFunction"

// creamos el objeto has md5
const hash = crypto.createHash('md5')

// actualizamos el has con el mensaje 
hash.update(mensaje)

// obtenemos el hash en formato hexademical 
const hexa = hash.digest('hex')
// digierelo como hexagecimal digest 


console.log(hexa) 
