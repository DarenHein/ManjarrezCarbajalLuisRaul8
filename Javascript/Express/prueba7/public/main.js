
// aqui hacemos el desclogse de la api en modo de terminal 

const url = 'https://jsonplaceholder.typicode.com/posts'

fetch (url)

	.then(response => {
		if(!response.ok){
			console.log("no se pudo conectar")
		}else{
			return response.json()
		}
	})
	.then(data => {
		const userId = data.map(post => post.title)
		//console.log(data)
		console.log(userId)
	})
	.catch(error => {
		console.log(error)
	})
