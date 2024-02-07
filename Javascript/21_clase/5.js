/**
 * 5. Contar ocurrencias:
Dado un array de elementos, cuenta cuántas veces aparece un elemento específico.
*/

function funcion(){
    let numero = 5 
    let acum = 0 
    let arreglo =  [1,3,4,5,6,7,5,4,3,5]

    for (let i  = 0 ; i < arreglo.length ; i++){
        if (arreglo[i] == numero){
            acum += 1 
        }
    }
    console.log("El " , numero , "aparece : " , acum , "veces ")
}
funcion()