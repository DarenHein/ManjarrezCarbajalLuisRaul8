/**
 * 
 * set interval se ocupa en intervalos de timepo como en la iteracion de un buvle repetitivo 
 */
let contador = 0; // contador universal 

function saludar() { // funcion que se va arepetir 
  console.log("Hola mundo", contador); // imprime hola mundo y 0 
  contador++; // contador + 1 

  if (contador > 5) {
    clearInterval(intervalId); // Detiene la repetición después de 5 ejecuciones
  }
}

// Ejecuta la función 'saludar' cada 2 segundos
const intervalId = setInterval(saludar, 2000);
