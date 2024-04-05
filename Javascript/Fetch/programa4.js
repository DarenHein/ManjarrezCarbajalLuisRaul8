

// vamos a consumir una api real 

const url = 'https://jsonplaceholder.typicode.com/posts'

// primero crear el fetch 

fetch(url)
	.then(response => {
		if(!response.ok){
			console.log("no se puedo conectar con la api")
		}else {
			console.log("conexion con la api EXITOSA")
			// retornamos el json 
			return response.json()
		}

	})
	.then(data => {
		// imprimirmos lo que recibimos 
		console.log(data)
	})
	.catch(error => {
		// mostramos el error del resultado si es que llega a pasar 
		console.error(error)
	})
