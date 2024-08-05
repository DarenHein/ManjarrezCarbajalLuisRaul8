// ### Ejercicio 4: Filtrar objetos por edad
// Dado el array de objetos `personas = [{ nombre: 'Luis', edad: 30 }, { nombre: 'Ana', edad: 25 }, { nombre: 'Pedro', edad: 35 }]`, usa `filter` para obtener solo las personas mayores de 30 años.

let Persona = [
    {
        nombre : "Luis",
        edad : 30
    },
    {
        nombre : "Ana",
        edad : 23 
    },
    {
        nombre : "Kevin",
        edad : 23 
    }
]

//console.log(Persona)

const edades = Persona.filter(Persona => Persona["edad"] >= 30)

console.log(edades)