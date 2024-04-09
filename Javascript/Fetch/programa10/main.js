

// aqui aremos la funcion 

function funcion(){

	// primero tomamos los datos de html 
	//var boton = document.getElementById('boton')
	var div = document.getElementById('contenedor_imagen')
	var numero = document.getElementById('numero').value

	console.log("todo bien")
	// necesitamos la ruta de la api 
	const url = 'https://pokeapi.co/api/v2/pokemon/' + numero

	fetch(url)
		.then(response => {
			if(!response.ok){
				console.log("errr en la conexion")
			}else {
				console.log("conexion exitosa")
				return response.json()
			}
		})
		.then(data => {
			// ahora si veiene lo chulo 
			var imagen = data.sprites.front_default; // obtener la utl 
			// del pokemon 
			var img = document.createElement('img')
			img.src = imagen
			img.style.width = '400px'
			//div.innerHTML = '' // limṕiamos cualquier texto no deseado 
			div.appendChild(img)
		})
		.catch(error => {
			console.log('error', error)
		})
	

}
