

const url = 'http://localhost:3000/usuarios'

fetch(url)
	.then(response => {
		if(!response.ok){
			console.log("error en conexion")
		}else{
			console.log("conecion exitosa")
			return response.json()
		}
	})
	.then(data => {

		console.log(data)
	})
	.catch((error) => {

		console.log(error)
	})
