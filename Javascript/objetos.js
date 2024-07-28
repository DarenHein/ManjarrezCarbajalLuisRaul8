// objetos en js 
// no son mas que diccionarios calve valor de python


// ejemplo 
let objeto = {
	nombre : "Luis",
	edad : 30,
	sexo : "masculino"
}
// imprime todos los llaves valor del objeto 
console.log(objeto)
// imprime solo un valor de una clave 
console.log(objeto.nombre)

// hay otra forma que me gusta mas 
let persona = new Object()
persona.nombre = "Luis"
persona.edad = 30
persona.sexo = "masculino"

console.log(persona)

// en lo personal me gust ams este 
// ahora actualizar un valor de una llave ya establecida 
persona.nombre = "kelly";
console.log(persona)
