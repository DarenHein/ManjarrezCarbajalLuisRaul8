/**
 * una paqueña demostracion de un servidor pqeuño en js 
 * 
 * que es un servidor 
 * 
 *  un servidor hay que verlo como un mesero que cumple exigencias del clineete 
 * que provee recursor como imagenes datos de una base de datos etc 
 */


// todo ejemplo sacado de chat gpt 

// Importar el módulo http de Node.js
const http = require('http');

// Configurar el servidor
const servidor = http.createServer((req, res) => {
  // Configurar las cabeceras de la respuesta HTTP
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Enviar el cuerpo de la respuesta
  res.end('¡Hola, este es un servidor HTTP básico!');
});

// Escuchar en el puerto 3000
const puerto = 3000;
servidor.listen(puerto, '127.0.0.1', () => {
  console.log(`Servidor en ejecución en http://127.0.0.1:${puerto}/`);
});

