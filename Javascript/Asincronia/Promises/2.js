

// primero craremos una primersa en una funcion que reciba un parametros 
//
function funcion(numero){
	return  new Promise((resolve,reject) => {
		// resolve cunado la opereacion es exiitosa 
		// reject cunado la operacion NO es exitosa 
		if(numero > 18){
			resolve("el numero es mayor a 18")
		}else{
			reject("el numero es menor o igualk a 18")
		}
	})
}

// de esta manera creamos la promesa ahora como la consumimos 
//
// consumo de una promise 
//
// es aprecido a consumir un api con fetch 

funcion(12)
	.then(mensaje => {
		console.log(mensaje)
	})
	.catch(error => {
		console.log(error)
	})
