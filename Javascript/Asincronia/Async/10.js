// hacer dos peticones api
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/users 


// dos peticiones api con asyn awit 
//
//

async function getUser(){
	const url = "https://jsonplaceholder.typicode.com/users"
	// mensjae introductio
	//
	console.log("haceindo peticion ala api ... ")
	await new Promise(resolve => setTimeout(resolve,1000))
	const response = await fetch(url)
	if(!response.ok){
		console.log(response.status)
	}

	//ahrora mandamos los datos 
	const data = await response.json()
	return data 
}

// ahora la funcion getPost
async function getPost(){
	console.log("REalizammos la segunda peticion ... ")
	const url = "https://jsonplaceholder.typicode.com/posts"
	// volbvemos a hcer los mismo 
	await new Promise(resolve => setTimeout(resolve,1000))
	const response = await fetch(url)

	if(!response){
		console.log(error)
	}

	// ahroa mandamos los datos 
	const  data = await response.json()
	return data 
}

//primero la funcion que manda a llamr alas dos funciones 
//
async function funcion(){
	try{
		// creo que lo manejare de modo monolitico 
		// osea primero imprime un dato de una 
		// y depsues el otro
		console.log("primera peticion ....")
		await new Promise(resolve => setTimeout(resolve , 1000))
		const mensaje = await getUser()
		console.log(mensaje)
		console.log("realizando segunda peticion ....")
		await new Promise(resolve => setTimeout(resolve,1000))
		const mensaje2 = await getPost()
		console.log(mensaje2)

		//console.log(mensaje)
		//console.log(mensaje2)
	}catch(error){
		console.log(error)
	}
}

funcion()
