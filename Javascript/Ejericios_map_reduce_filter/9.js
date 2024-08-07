
// ### Ejercicio 9: Encontrar el mayor número
// Usa `reduce` para encontrar el mayor número en el array `[12, 5, 8, 21, 3]`.

const array = [12,3,4,1,21]

// ahroa ocupand el reduce solo queremos el nuemro mas grande 

const mayor = array.reduce((acum , array ) => {
    if (acum < array){
        return array
    }else{
        return acum
    }
}, array[0])

console.log(mayor)

/**
 * ahora explicar el codigo por que me costo 
 * tenemos dos calores acum y array 
 * array representa a cada elemento por iteracion de array lista 
 * ahora acum inicial con le primer valor de array qu es 12 
 * ahoa si  entra en el if si acum es menor a array retruna el array en esa posiscion 
 * y se acutaliza acum 
 * si entra en else el valor de acum se conserva 
 */