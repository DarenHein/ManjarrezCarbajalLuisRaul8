// todo esta es la parte del cliente en la aplicacion 
// primero necesitamos el net 
const net = require('net')

// ahora cremos al conexion con el server indicandole el puerto a donde nos conectaremos 
const client = net.createConnection({port:3000} , () => {
    console.log("Conexion establecida con el servidor")
    client.write("Hola server como estas ? ")
})

// ahora neceistamos un evento de que apsara siel server nos manda una respuesta 
client.on('data',(data) => {
    //recivbiendo mensaje del servidor 
    console.log("hola como estas " , data.toString())
    // terminando conexion con el servidor 
    client.end()
})

// ahora necesitamos un evento cuando el cleinte se desconecte 
client.on('end' , () => {
    console.log("bye ! ")
})