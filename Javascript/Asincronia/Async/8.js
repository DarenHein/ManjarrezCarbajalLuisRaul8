//Descripción:
//Crea una función waitAndGreet que reciba un nombre como parámetro, espere 3 segundos usando setTimeout dentro de una promesa, y luego devuelva un mensaje de saludo usando async/await.

//Objetivo:
//Practicar la creación de promesas y el uso de async/await para esperar a que se resuelvan.
//
//


async function funcion2(params){
	let nombre = "hola como estas " + params 
	console.log("nombre recibido ... espre ....")
	await new Promise(resolve => setTimeout(resolve,3000))
	return nombre 
}

async function funcion(){

	const nombre = "Luis"

	try{
		let mensaje = await funcion2(nombre)
		console.log(mensaje)

	}catch(error){
		console.log("error -> " , error)
	}

}

// mandmos a llamar ala funcion 
//
funcion()
