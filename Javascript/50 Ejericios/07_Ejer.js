// invertir las palbras de una cadena 

let cadena = "hola"
let arreglo = []

for (let i = 0 ; i < cadena.length ; i ++ ){
    arreglo.push(cadena[i])
}

console.log(arreglo)

arreglo.reverse()

console.log(arreglo)

let cadena_nueva = arreglo[0].toString()

console.log(cadena_nueva)