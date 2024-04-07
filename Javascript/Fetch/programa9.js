
// seguimos con la poke api 
// ahora sacaremos el por pokemon nombre y id del pokemon 

const url =  'https://pokeapi.co/api/v2/pokemon/'
id = "232" 
const new_url = url + id 
console.log(new_url) 

fetch(new_url)
	.then(response => {
		if(!response.ok){
			console.log("Error en la conexion")
		}
		return response.json()
	})
	.then(data => {
		//console.log("id Pokemon -> " , data.id)
		//console.log("nombre -> " , data.name)
		//console.log(data.types)
		console.log(data)
	})
	.catch(error => {
		console.error("error ocurrido -> ", error)
	})
