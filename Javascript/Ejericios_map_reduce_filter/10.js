/**
 * ### Ejercicio 10: Filtrar números negativos y sumar
Dado el array de números `[10, -5, 7, -3, 8]`, usa `filter` para obtener solo los números negativos y luego usa `reduce` para calcular la suma de esos números negativos.
 */

const negativos = [-1,2,-1,-5,32]

// ahroa reduciomos los numeros 

const newnegativos = negativos.filter(negativos => negativos < 0)

console.log(newnegativos)

// ahora resucimos los numeros negativos en una suma 

const suma = newnegativos.reduce((acum , numeros) => acum + numeros , 0)

console.log(suma)