// asincornia 
// aanalogia : esperemos a que este la comida mientras hago mas cosas 
//
//


// funcion que llamara orta funcion 
function funcion(callback){
	console.log("heciendo cosas ")
	setTimeout(() => {
		console.log("mandamos a llamar callback")
		callback()
	},2000)
	console.log("sigo chingandole")
}

function funcion2(){
	console.log("ya me ejecutaron perros")
}

funcion(funcion2)

// ahora entendemoas el fncionamiento 
// la primer funcion recibe un aprametro que se llama callback este callback 
// no es mas que otra funcion 
// ahora imprimimos un console .log para imprimir cualqueir cosa
// pero hasta el final de la primea funcion hay otro callback ese console.log tambennse ejecuatra antes 
// del setTimeout por que por que la asincronia funciona como primero hago todo lo de esta funcion y depues 
// hago lo del callback 
// pasado los 2000 milisegundo se ejecutara la siguiente funcion el callback 
