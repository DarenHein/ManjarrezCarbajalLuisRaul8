// funcion flecha en una callback 
//
// mandaremos una funcion anonima 

function funcion1(callback){
	setTimeout(() => {
		console.log("Empezando callback")
		callback()
	},3000)
}

console.log("antes del callback")
funcion1(() => {
	console.log("mensje que vamos a mandar ala funcion ")
	// esto rije como funcion anonima y se puedemandar 
})

console.log("termino del codigo")
