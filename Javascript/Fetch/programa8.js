

// voy a ahcer unas cosas o pruebas con la api de pokemon 
// 1 quiero solo acceder a un pokemon de la api 


const url = 'https://pokeapi.co/api/v2/pokemon/1'

fetch(url)
	.then(response => {
		if(!response){
			console.log('erroe en la conexion')
		}
		return response.json()
	})
	.then(data => {
		console.log(data.name)
	})
	.catch(error => {
		console.log(error)
	})
