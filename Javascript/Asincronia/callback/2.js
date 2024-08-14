function organizarEvento(callback) {
    console.log("Organizando el evento...");
    setTimeout(() => {
        console.log("El evento ha terminado.");
        callback(); // Aquí se llama al callback después de que la tarea principal termina
    }, 2000); // Simula que el evento toma 2 segundos
     console.log("hola mundo como estas ")
}

function enviarAgradecimientos() {
    console.log("Enviando agradecimientos...");
}

// Ejecuta organizarEvento y pasa enviarAgradecimientos como callback
organizarEvento(enviarAgradecimientos);


/*
 *primero se activa la funcion organizar evento 
 * despues cuanta 3 segundos y se manda el mensaje el evtno terminado 
 * y se mnada a llamar al callback o funcion y se ejecuta lo que etse en esa funcion 
 * termina el la funcion 
 * */
