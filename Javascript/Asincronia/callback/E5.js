//Ejercicio 1: Manejo de Errores Simples
//Descripción: Crea una función readFile que simule la lectura de un archivo. Esta función tomará dos argumentos: el nombre del archivo y un callback. Si el nombre del archivo es "error", simula un error pasando un objeto de error al callback. De lo contrario, pasa el contenido del archivo (una cadena) al callback. La función callback debe manejar el error si lo hay, o mostrar el contenido del archivo si no hay errores.

//Requisitos:

//Usa setTimeout para simular el retraso en la lectura del archivo.
//Implementa el manejo de errores en el callback.
//
//


function funcion(name,callback){
	console.log("buscando el Archivo ....")
	setTimeout(() => {
		if(name == "Hello.pdf"){
			callback(null,"Archivo encontrado con exito")
		}else{
			callback("archivo no enontrado")
		}
	},3000)
}

function funcion2(error,resultado){
	if(error){
		console.log(error)
	}else {
		console.log(resultado)
	}
}

const name = "Hello.pdf"
funcion(name,funcion2)
