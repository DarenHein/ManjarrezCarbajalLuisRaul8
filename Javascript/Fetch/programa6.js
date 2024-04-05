

// const url = 'https://pokeapi.co/api/v2/pokemon/';

// seguimos con la api de pokemon 

const url = 'https://pokeapi.co/api/v2/pokemon/'


fetch(url)
	.then(response => {
		if(!response.ok){
			console.log("error en la conexion")
		}

		return response.json() 
	})
	.then(data => {
		console.log(data)
		console.log("Numero total de pokemons -> ",data.count)
	})
	.catch(error => {
		console.error("error -> " , error)
	})
