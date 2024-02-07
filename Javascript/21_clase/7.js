/**
 * 7. Combinar arrays:
Dados dos arrays, crea una nueva array que contenga los elementos de ambos.
 */

function funcion(){
    let arreglo = [1,2,3,4,5]
    let arreglo2 = [6,7,8,9]
    let arreglo3 = []
    for (let i = 0 ; i < arreglo.length ; i++){
        arreglo3.push(arreglo[i])
    }
    for (let i = 0 ; i < arreglo2.length ; i++){
        arreglo3.push(arreglo2[i])
    }
    console.log(arreglo3)
}

function funcion2 (){
    // ocuapndo el metodo concat 
    let arreglo = [1,2,3,4]
    let arreglo2 = [1,2,3,4]
    let arreglo3 = arreglo.concat(arreglo2)
    console.log(arreglo3)
}

funcion2()