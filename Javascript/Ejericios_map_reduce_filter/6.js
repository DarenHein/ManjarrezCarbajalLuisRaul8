// ### Ejercicio 6: Calcular el promedio de edades
// Dado el array de objetos `personas = [{ nombre: 'Luis', edad: 30 }, { nombre: 'Ana', edad: 25 }, { nombre: 'Pedro', edad: 35 }]`, usa `reduce` para calcular el promedio de las edades.

const personas = [
    {
        nombre : "Luis",
        edad : 30
    },
    {
        nombre : "kelly ",
        edad : 29
    },
    {
        nombre : "kevin",
        edad : 23
    },
    {
        nombre : "axel",
        edad : 22
    }
]

const edad = personas.reduce((acum , personas) => acum + personas["edad"] , 0)

/**
 * 
 * edad es es la nueva variable que almacena el proamdio 
 * reduce metodo array que reduce todos los elementos del array original a 1 
 * acum es una varible qeu suma y acumula el resultado final 
 * peronas hace referecia a caa elemento del array y marcaamos edad por que es la llave 
 * 0 es la iniciacion de acum 

*/

console.log(edad / personas.length)