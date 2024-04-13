
// ahora ocupando la api de jsonplaholcder aprendermos 
// a solo obtener las llaves que devuelve la api 
// esto es importante para tener mayor control de los datos 

const url = 'https://pokeapi.co/api/v2/'

fetch(url)
	.then(response => {
		if(!response.ok){
			console.log("no se pudo conectar")
		}else{
			console.log("Conexion exitosa")
			return response.json()
		}
	})
	.then(data => {
		data.forEach(post => {

			const key = Object.keys(post)
			console.log(post)
		})
	})
	.catch(error => {
		console.log("-> " , error)
	})
