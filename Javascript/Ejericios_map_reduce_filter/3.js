// ### Ejercicio 3: Duplicar valores
// Usa `map` para crear un nuevo array donde cada número del array `[1, 2, 3, 4, 5]` esté duplicado.

let array = [1,2,3,4,5]

let nuevoArray = array.map(array => array * 2 )

console.log(nuevoArray)