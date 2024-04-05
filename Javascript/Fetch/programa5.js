

// vamos a ahcer la coenxcion con la pokeapi 

const url = 'https://pokeapi.co/api/v2/'

// ahora creacmos el fecth 

fetch(url)
	.then(response => {
		if(!response.ok){
			console.log("error en la conexion de la api")
		}else{
			console.log("CONEXION EXITOSA")
			return response.json()
		}
	})
	.then(data => {
		console.log(data)
	})
	.catch(error => {

		console.error("error ! " , error)
	})
