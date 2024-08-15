
// Ejercicio 1: Consulta de API Simulada
// Descripción:
// Simula una consulta a una API que devuelve los datos de un usuario después de 3 segundos. Crea una función consultarAPI que devuelva una promesa que se resuelve con los datos del usuario. Luego, crea una función mostrarUsuario que use await para esperar a que consultarAPI se resuelva y luego imprima el nombre del usuario.

// Requisitos:

// La función consultarAPI debe devolver una promesa que se resuelve con un objeto de usuario que contenga un nombre (nombre).
// La función mostrarUsuario debe usar await para esperar la resolución de consultarAPI y luego imprimir el nombre del usuario.

// ok primero necsitasmoa la funcion que reciba los adtos y mande la url 

async function funcion2(url) {

    await new Promise(resolve => setTimeout(resolve , 3000))

    const response = await fetch(url) // primero espera toma los la respuesta y mandala ala variabl;e 

    if(!response.ok){
        console.log(response.status)
    }

    // si llegasmoa  aeste punto es que tenemos datos 

    const data = await response.json() // trainfromamos los datos en json 

    console.log("datos recibidos con exito")
    
    return data 
}


 async function funcion(){
    const url = "https://jsonplaceholder.typicode.com/posts"
    try {
        const datos = await funcion2(url) // es como decirtle espera qque termine de llegar datos
        console.log(datos)
    } catch (error) {
        console.log(error)
    }
}

funcion()