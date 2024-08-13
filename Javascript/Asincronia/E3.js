// Ejercicio 3: Buscar en un Array
// Escribe una función buscarEnArray que tome un array y un valor a buscar, junto con un callback:

// Si el valor se encuentra en el array, el callback debe ser llamado con null como error y con la posición del valor en el array como resultado.
// Si el valor no se encuentra, el callback debe ser llamado con "Error: Valor no encontrado" como error.


function funcion(array,buscar,callback){
    // todo de aqui primero 
    let respuesta = array.includes(buscar)

    setTimeout(() => {
        if(respuesta){
            callback(null,"El numero se encuentra en el array " + buscar)
        }else {
            callback("El numero no se encuentra en el array " + buscar)
        }
    },1000)

}

function funcion2(error,resultado){
    if(error){
        console.log(error)
    }else {
        console.log(resultado)
    }
}


let array = [1,2,3,4,5,6]
let buscar = 1 
funcion(array,buscar,funcion2)