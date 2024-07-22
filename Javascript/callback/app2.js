// Función para hervir el agua
function hervirAgua(callback) {
    console.log("Paso 1: Poniendo agua a hervir...");
    setTimeout(function() {
        console.log("Paso 2: El agua está hirviendo.");
        callback(); // Llama al callback cuando el agua está hirviendo
    }, 3000); // Simula 3 segundos de hervir el agua
}

// Función para cocinar la pasta (callback)
function cocinarPasta() {
    console.log("Paso 3: Cocinando la pasta.");
}

// Función que orquesta el proceso de cocina
function comenzarProcesoDeCocina() {
    hervirAgua(function() {
        // Callback que se ejecuta después de que el agua esté hirviendo
        cocinarPasta();
    });
}

// Llamada inicial para comenzar el proceso de cocina
comenzarProcesoDeCocina();
