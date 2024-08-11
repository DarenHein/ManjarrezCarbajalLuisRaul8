function organizarEvento(callback) {
    console.log("Organizando el evento...");
    // Sin setTimeout, la tarea principal termina inmediatamente
    console.log("El evento ha terminado.");
    callback(); // Llama al callback de inmediato
}

function enviarAgradecimientos() {
    console.log("Enviando agradecimientos...");
}

// Ejecuta organizarEvento y pasa enviarAgradecimientos como callback
organizarEvento(enviarAgradecimientos);

