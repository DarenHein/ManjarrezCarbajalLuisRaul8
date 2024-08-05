// ### Ejercicio 1: Sumar todos los números en un array
// Usa `reduce` para sumar todos los números en el array `[10, 20, 30, 40, 50]`

let array = [10,20,30,40,50]

let resultado = array.reduce((acum,numero) => acum + numero , 0)

console.log(resultado)

