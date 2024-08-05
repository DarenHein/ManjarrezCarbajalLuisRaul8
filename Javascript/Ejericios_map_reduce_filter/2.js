// ### Ejercicio 2: Filtrar números pares
// Usa `filter` para obtener un nuevo array con solo los números pares del array `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.


let array = [1,2,3,4,5,6,7,8,9,10]

let filtro = array.filter(array => array % 2 == 0)

console.log(filtro)