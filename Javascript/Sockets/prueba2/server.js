// todo perimero exportamos librerias 
const net = require('net')

// ahora crearemos un servidor tcp 
const server = net.createServer((socket) => {
    // aqui ira todo lo del servidor como manejamos las respuestas de nuestro cliente 

    console.log("Cliente conectado")

    // creamos un evento cuando el usuario nos mande un mensaje 
    socket.on('data', (data) => {
        // data contiene la informacion que nos manda nuestro clinte 
        console.log("Cliente -> ", data.toString())
        // ahora despues de recibir esta infromacion mandaremos al clinte un mensaje
        socket.write("Server -> " + data.toString())
    })

    // necesitamos un evento cunado el cliente se desconecte 
    server.on('end', () => {
        console.log("Clinte se desconecto")
    })

})
// pod
server.listen(3000,() => {
    console.log("servidor escuchando en el puerto 3000")
})

