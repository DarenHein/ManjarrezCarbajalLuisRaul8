/**
 * 3. Filtrar pares:
Dado un array de números, filtra solo los números pares.
 */



let arreglo = [1,2,3,4,5]
let arreglo2 = []
for (let i = 0 ; i < arreglo.length ; i++){
    if (arreglo[i] % 2 == 0 ){
        console.log(arreglo[i])
        arreglo2.push(arreglo[i])
    }
}
console.log(arreglo2)