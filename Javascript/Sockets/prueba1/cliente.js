const net = require('net');

// Conecta al servidor en el puerto 3000
const client = net.createConnection({ port: 3000 }, () => {
  console.log('Conectado al servidor');
  // Envía un mensaje al servidor
  client.write('Hola, servidor');
});

// Evento cuando se recibe un dato del servidor
client.on('data', (data) => {
  console.log('Mensaje recibido del servidor:', data.toString());
  // Cierra la conexión
  client.end();
});

// Evento cuando el cliente se desconecta
client.on('end', () => {
  console.log('Desconectado del servidor');
});
