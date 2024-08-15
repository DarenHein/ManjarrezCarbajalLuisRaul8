// Aquí tienes otro ejercicio para que practiques con `async` y `await`:

// ### Ejercicio: Simulación de Descarga de Archivos
// **Descripción:**
// Simula la descarga de un archivo que toma 5 segundos en completarse. Crea una función `descargarArchivo` que devuelva una promesa que se resuelve con un mensaje de éxito después de 5 segundos. Luego, crea una función `iniciarDescarga` que use `await` para esperar a que la descarga se complete y luego imprima un mensaje indicando que la descarga ha terminado.

// **Requisitos:**
// 1. La función `descargarArchivo` debe devolver una promesa que se resuelve después de 5 segundos con un mensaje que indique que la descarga fue exitosa.
// 2. La función `iniciarDescarga` debe usar `await` para esperar a que `descargarArchivo` se resuelva y luego imprimir un mensaje indicando que la descarga ha terminado.

// ¡Intenta resolverlo por tu cuenta!

async function funcion2(imagen) {
    await new Promise(resolve => setTimeout(resolve , 5000))
    return "Descagra terminda"

}
async function funcion(){
    // esta es la funcion que mandara el nombre del archivo a descargar
    try {
        // aca mandamos a llamr ala funcion que descarga
        const imagen = "image.png" 
        console.log("Mandado la solicitud de descarga ")
        const imagen2 = await funcion2(imagen)
        console.log(imagen2)
    } catch (error) {
        console.log("Error -> " , error )
    }
}

funcion()