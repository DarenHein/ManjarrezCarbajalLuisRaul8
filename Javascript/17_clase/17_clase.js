
// vamos a ver los objetos en js 
// es como si un diccionario y un pooo hubieran tenido un hijo 

var Persona = {
    "Nombre" : "Luis" , 
    "Edad" : 30 , 
    "Sexo" : "Masculino",
    "Ocupacion " : "Desarrollador"
}

// vamos a acceder a cada elemento de el poodiccionario 

console.log("nombre : ", Persona.Nombre)
console.log("Edad : " , Persona.Edad)

// modifcar un elemento en especifico 
Persona.Nombre = "Raul"

// agregar un elemento al dicpoo
Persona.Videjuego = "Saga Arkaham"

console.log(Persona.Videjuego) // debe imprimir saga arkaham