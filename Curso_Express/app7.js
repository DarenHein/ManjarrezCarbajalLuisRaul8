const fs = require('fs');

// Función para registrar un mensaje en el archivo de registro
function registrarMensaje(mensaje) {
    // Obtener la fecha y hora actual
    const fechaHora = new Date().toISOString();
    // Formatear el mensaje con la fecha y hora
    const mensajeFormateado = `${fechaHora} - ${mensaje}\n`;
    
    // Escribir el mensaje en el archivo de registro (modo sincrónico)
    fs.writeFileSync('logfile.log', mensajeFormateado, { flag: 'a' });
}

// Ejemplo de uso
registrarMensaje('Este es un mensaje de prueba.');
