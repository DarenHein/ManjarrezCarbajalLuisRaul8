// ahora vamos a ber que son los get t set 
//
// hay dos forms de poner un atributo privado en js 
//  cpon el simbolo de _
//  con el simbolo de # 
// el de _ es cmompor respeto entre porgrmadores 
// y el # es ahuevo ques privado perro 
// ahi entram los get t set 
// se ocupan get apra ver el atributo privado fuera de la clase 
// set poder modificar el atributo fuera de la clase 
//
//

class Persona{
	#nombre
	constructor(nombre){
	this.#nombre = nombre
	}

	// metodp get 
	// para ver lo que hay fuera de la clase 
	get nombre (){
		return this.#nombre
	}

	// ahora el metodo set este 
	// sirve apra que se pueda modificar el atributo desde 
	// fuera de la calse 
	set nombre (nuevoNombre){
		this.#nombre = nuevoNombre
	}

}

const persona = new Persona("Luis")

const nombre = persona.nombre

console.log(nombre)

persona.nombre = "kelly"

console.log(persona.nombre)

