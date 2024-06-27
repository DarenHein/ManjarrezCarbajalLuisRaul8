const net = require('net');

// Crea un servidor TCP
const server = net.createServer((socket) => {
  console.log('Cliente conectado');

  // Evento cuando se recibe un dato del cliente
  // aqui es cunado recibicmos datos de un cliente y que hacemos 
  // con esos datos data contiene lo qu enos manda el usuario 
  socket.on('data', (data) => {
    // todo convertimos el data en un string y lo mandamos a pantalla 
    console.log('Mensaje recibido del cliente:', data.toString());
    // Envía una respuesta al cliente
    // mandamos una respuesta 
    socket.write('Mensaje recibido: ' + data.toString());
  });

  // Evento cuando el cliente se desconecta
  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
});

// El servidor escucha en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
