// Función que devuelve una promesa
function obtenerNumero() {
    return new Promise(resolve => {
        setTimeout(() => resolve(42), 1000);  // Resuelve la promesa con el valor 42 después de 1 segundo
    });
}

// Función asíncrona que usa await
async function mostrarNumero() {
    console.log("Esperando el número...");
    const numero = await obtenerNumero();  // Pausa aquí hasta que la promesa se resuelva
    console.log("Número recibido:", numero);  // Salida: Número recibido: 42, después de 1 segundo
}

// Llamada a la función asíncrona
mostrarNumero();

/**
 * primero mandmos a llamr ala funcion mostrarnumero esta manda un mensaje y manda a a llmar ala funcion obtener numero hasta ahi se para la funcion mostrar numero hasta que acabe obtener numero y al termino imprimre lo que obtuve 
 */