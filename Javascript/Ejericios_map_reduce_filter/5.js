// ### Ejercicio 5: Crear un string con nombres
// Dado el array de objetos `personas = [{ nombre: 'Luis' }, { nombre: 'Ana' }, { nombre: 'Pedro' }]`, usa `map` y `join` para crear un string con todos los nombres separados por comas.


const personas = [
    {
        nombre : "Luis"
    },
    {
        nombre : "kelly"
    },
    {
        nombre : "kevin"
    },
    {
        nombre : "Axel"
    }
]

// ook tenemos que sumar todos los nombres en un cadena 

const array = personas.map(personas => personas["nombre"])
console.log(array)

// ahora quieres que saquemos o separemos los nombres en un strign 

const cadena = array.join(",")

console.log(cadena)

