// varibales y constantes en javascript 
// var let y const

// var de uso global tiene alcance global en todo el codigo osea que 
// desde cualqueir aprte delcodigo se puede ocuapar 

var nombre = "Luis"
console.log(nombre)


// let 
// es de uso de bloque y la mas ocuapa  por el momento solo tiene alcance por bloque 

let nombre2 = "Luis2"
function funcion(){
	// pero si declaramos unavariable let dentro de una funcion 
	// solo es accesible dentro d la funcion 
	let edad = 2 // solo acessible dentro de esta funcion 
	var edad2 = 3 ; // si es decalrada en una funcion solo puede ser ocupada en al funcion  
	console.log(nombre2) // si llega hasta aca 
}
funcion()
//console.log(edad)
//console.log(edad2)


// const o constnates 
// son variables q solo se pueden ocupar cunado no queremos cambiar su dato 
const nombre = "kelly" // nunca se va poder cambiar si se cambia marca error 
