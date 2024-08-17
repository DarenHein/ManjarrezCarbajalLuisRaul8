 // ahora cavamos a hacer uns simulacionde mandar a una api con fetch con el metodo push 
//
// url : https://jsonplaceholder.typicode.com/posts
//
//
fetch("https://jsonplaceholder.typicode.com/posts" , {
	method : 'POST',
	headers : {
		'Content-Type' : 'application/json'
	},
	body : JSON.stringify({
		nombre : "Luis",
		edad : 30 
	})
})
// ahora la explicacion de alginas lineas de codigfgo 
// fecth hace solicitudes http a servers 
// method defaulst es het pero podemos indedicar algunode los otros post put dlete etc 
// headers es la ffroma en la que llegan lso datos al sver debemos indeicarle la forma en la que llegan 
// en est caso como es json lo mandmos como conten-tyoe application/json
// ahora el body es loq ue se mandara al servidor en este ejemplo es un json asi que amndsmo un objeto 
// json.stringify() -> es el tranformador de objetos  sjson de js 


// TALACHA DE DATOS SU RESPONSE EL SERVISDOR ETC ETC ME GUSTA MAS CON ASYN AWIAT PERO PARA 	
// FORMA DE EXPLICACION LOD EJARE ASI 
.then(response => response.json())
.then(data => {
	console.log("exit ", data)
})
.catch(error => {
	console.log("error" , error )
})
