// Importar los módulos necesarios
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

// Crear una aplicación de Express
const app = express();

// Crear un servidor HTTP utilizando la aplicación de Express
const server = http.createServer(app);

// Crear un servidor WebSocket vinculado al servidor HTTP
const wss = new WebSocket.Server({ server });

// Middleware para servir archivos estáticos desde el directorio 'public'
app.use(express.static('public'));

// Manejar nuevas conexiones WebSocket
wss.on('connection', (ws) => {
  console.log('Nuevo cliente conectado');

  // Manejar mensajes recibidos de los clientes
  ws.on('message', (message) => {
    console.log('Mensaje recibido:', message);

    // Retransmitir el mensaje a todos los clientes conectados
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Manejar la desconexión de los clientes
  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
