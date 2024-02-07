/**
 * 10. Convertir a mayúsculas:
Dado un array de cadenas, convierte todas las cadenas a mayúsculas.
 */

function funcion(){
    let arreglo = ["hola",2,"adios",23]
    // primero vamos aver que loselementos sean completamente caracteres y se almacenaran en un 
    // nuevo arreglo de solo cadenas 
    for (let i =0 ; i < arreglo.length ; i++){
        let validacion = isNaN(arreglo[i])
        if (validacion == true){
            arreglo[i] = arreglo[i].toUpperCase()
        }
    } 

    console.log("vector cambiado")
    for ( let i = 0 ; i <arreglo.length ; i++ ){
        console.log(arreglo[i])
    }
}
funcion()