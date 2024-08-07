// ### Ejercicio 8: Obtener la suma de los cuadrados
// Usa `map` para elevar al cuadrado cada número en el array `[2, 4, 6, 8]`, y luego usa `reduce` para obtener la suma de esos cuadrados.


const array =  [2,4,6,8]

const resultado = array.reduce((acum,array) => acum + array , 0 )

console.log(resultado)