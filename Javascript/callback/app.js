// Función para preparar la masa
function prepararMasa(callback) {
    console.log("Preparando la masa...");
    setTimeout(function() {
        console.log("Masa lista.");
        callback(); // Llama al callback cuando la masa está lista
    }, 2000); // Espera 2 segundos antes de completar la masa
}

// Función para hornear la galleta
function hornearGalleta() {
    console.log("Horneando la galleta...");
    setTimeout(function() {
        console.log("Galleta lista.");
    }, 3000); // Espera 3 segundos antes de que la galleta esté horneada
}
