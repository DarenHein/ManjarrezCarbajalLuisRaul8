
/*

    _    _ _ 
   / \  | | |
  / _ \ | | |
 / ___ \| | |
/_/   \_\_|_|
           

El metodo all en Express es un metodo que abarca todas las peticiones http 

get 
post 
put 
delete 
etc 

lo que hace primero es entrar al all e independientemente de loq ue haga el usuario 
en la ruta el el all con junto de next() lo reenviera a su ruta corresnpondinte 

si nos damos cuneta en el ejemplo de abajo creamos una ruta all con el nombre usuarios 

esta imprime en consola que entro en esa ruta y luego con el emtodo next manda 
a su respectiva ruta con su tipo de solicitud 

por lo que veo es una forma de realizar un solo nombre de rutas pero con distintas 
tipos de solicutus http 

*/



const express = require('express');
const app = express();

// Middleware de registro para todas las solicitudes a '/usuarios'
app.all('/usuarios', (req, res, next) => {
  console.log('Se recibió una solicitud a la ruta "/usuarios"');
  next(); // Llama al siguiente middleware en la cadena
});

// Manejador de ruta para GET a '/usuarios'
app.get('/usuarios', (req, res) => {
  res.send('Página de usuarios (GET)');
});

// Manejador de ruta para POST a '/usuarios'
app.post('/usuarios', (req, res) => {
  res.send('Se ha enviado un formulario de usuarios (POST)');
});

// Manejador de ruta para PUT a '/usuarios'
app.put('/usuarios', (req, res) => {
  res.send('Se ha actualizado un usuario (PUT)');
});

// Manejador de ruta para DELETE a '/usuarios'
app.delete('/usuarios', (req, res) => {
  res.send('Se ha eliminado un usuario (DELETE)');
});

app.listen(3000, () => {
  console.log('Servidor Express funcionando en el puerto 3000');
});
