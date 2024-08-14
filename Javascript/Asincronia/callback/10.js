// ahora aremos un call back con mensjo de erro y respuesta pero ocupando fetch 
// callback pedir pizzay hacer algo mientras esta 
// los manejos de errores es manejoar cualquier tipo de errores en lo que esta nuestra callback 

// url -> https://jsonplaceholder.typicode.com/posts
//
function funcion(url,callback){
// aca mandamos la funciony el url
	fetch(url)
	.then(response =>{
	if(!response.ok){
		console.log("Error en la solicitud" , response)
		callback("error en la conexion con el sever")
	}else{
		return response.json()
	}
	})
	.then(data => {
		//console.log(data)
		callback(null,data)
	})
	.catch(error  => {
		calback(error) // aca va el error 
	})
}

function funcion2(error,respuesta){
	if(error){
		console.log("error",error)
	}else{
		console.log("respuesta -> ",respuesta)
	}
}

// ahora empezamos a mandar datos 
//
const url = "https://jsonplaceholder.typicode.com/posts"
funcion(url,funcion2)
