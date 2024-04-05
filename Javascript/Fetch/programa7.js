

// la ves pasada solo obtuvnimos 20 pokemons ahora 
// obtendremos todos los 15y tantos 

// url 

const url = 'https://pokeapi.co/api/v2/pokemon/'
// necesitmoas un arreglo 
arreglo =  []
// creamos como el iterador 
nexturl = url

while(nexturl != null){

	fetch(url)
	.then(response => {
		if(!response.ok){
			console.log("erro en la conexion")
		}
		return reponse.json()
	})
	.then(data => {
		arreglo = arreglo.concat(data.results)
		newurl = data.next

		// ahora imprimirmos a todos los pokemon
		if(!nexturl){
			for(let i = 0 ; i < arreglo.length ; i++){
				console.log(arreglo[i].name)
			}
		}
	})
	.catch(error => {
		console.error('error en la conexion')
	})



}

