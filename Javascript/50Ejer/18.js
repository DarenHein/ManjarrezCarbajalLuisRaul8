// 18. Crea una función que reciba un array y un número y retorne un nuevo array con los elementos mayores al número dado.

/**
 * osea que reciba un numero y un array y e diga que me deculva los numeros mayores del array al numero 
 * 
 * 
 * 
 */

let array = [1,2,3,5,6,7,12,43,54,656]
let numero = -1

let array2 = array.filter(array => array > numero)
console.log(array2)

