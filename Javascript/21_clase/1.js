/**
 * 1. Sumar elementos:
Dado un array de números, escribe una función que calcule la suma de todos los elementos.
 */

function suma(){
    let arreglo = [1,2,3,4,5]
    let acum = 0 ; 
    // primero verificamos si todos los elemntos en el arreglo son numeros 
    for (let elemento in arreglo){
        let veri = isNaN(elemento)
        if (veri == true){

        }else{

            acum ++

        }
    }

    if (acum == arreglo.length){
        let acum2 = 0 
        for (let elementos in arreglo){
            acum2 = acum + elementos 
        }
        console.log("la suma total de la lista es de : " , acum2)
    }else {
        console.log("algun elemnto es una cadena")
    }
}
suma()