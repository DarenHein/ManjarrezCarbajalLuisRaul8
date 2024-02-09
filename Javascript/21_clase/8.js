/**
 * 8. Encontrar elemento por índice:
Escribe una función que encuentre el elemento en un array dada su posición.
 */

function funcion(){
    // creamosel arreglo 
    let arreglo = [1,2,3,4,5]
    // numero a buscar 
    let buscar = 3 
    let bandera = arreglo.includes(buscar)
    if ( bandera == true ){
        let numero = arreglo.indexOf(buscar)
        console.log("incluye el elemnto que estas buscando  y se indice es " , numero)
    }else {
        console.log("no incluye el elemento que estas buscando ")
    }
    
}

funcion()