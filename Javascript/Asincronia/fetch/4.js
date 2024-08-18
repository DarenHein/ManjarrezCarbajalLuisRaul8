// ahora vamos a hacer la conulta fetch con post con async await por que las apsadamos lo hicimos del metodo tradicional 
//


// ahora la funion que llama 
async function setPost(){
    const mensaje = {
        nombre : "Luis",
        edad : 30 , 
        chamba : "Programdor "
    }
	const url = "https://jsonplaceholder.typicode.com/posts"

    // ahora hacemos una espera  con un promisa 
    await new Promise(resolve => setTimeout(resolve , 3000))
    // ahora hcemos la consulta 
    const response = await fetch(url,{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(mensaje)
    })
    
    if(!response.ok){
        console.log(response.status)
        return
    }

    // ahora ya tranfromamos los datos 
    const data = await response.json()
    return data 
}


async function funcion(){
	try{
		// gacemos la funcion 
		const mensaje = await setPost()
		console.log(mensaje)
	}catch(error){
		console.log(error)
	}
}

funcion()
