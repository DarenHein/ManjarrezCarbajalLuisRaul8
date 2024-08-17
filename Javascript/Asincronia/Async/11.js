//Ejercicio 1: Consulta a una API
//Escribe una función fetchUserData que obtenga los datos de un usuario específico desde la API https://jsonplaceholder.typicode.com/users/{id} usando async/await. El ID del usuario debe ser un argumento para la función.
//


// necesitamos 2 funciones 


async function getUser(num){
	// mensjae introductorio a
	const url = "https://jsonplaceholder.typicode.com/users/" + num
	console.log("haciendo la consulta ....")
	// hacempos los tiempos de espera 
	await new Promise(resolve => setTimeout(resolve,3000))
	const response = await fetch(url)
	if(!response.ok){
		console.log(response)
	}
	const data = await response.json()
	return data
}

async function funcion(){
	try{
		const mensaje = await getUser(2)
		console.log(mensaje)
	}catch (error){
		console.log("error")
	}
}

funcion()
