const fs = require('fs');

try {
    // Lee el contenido del archivo JSON
    const contenido = fs.readFileSync('persona.json', 'utf-8'); 
    /* 
    leemoa los datos del archivo json 
    */

    // Parsea el contenido como JSON
    // hacemos un parsero de json a objeto 
    const datos = JSON.parse(contenido);

    // Imprime todas las propiedades del objeto
    Object.keys(datos).forEach(propiedad => {
        console.log(`${propiedad}: ${datos[propiedad]}`);
    });
} catch (error) {
    console.error('Error al leer el archivo JSON:', error.message);
}
