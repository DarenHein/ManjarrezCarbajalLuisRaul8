
document.addEventListener('DOMContentLoaded' , function(){


    // vamos a tomas todos lso datos 
    var boton = document.getElementById('boton')

    boton.addEventListener('click' , function(){
        var nombre = document.getElementById('nombre').value
        var contra = document.getElementById('contra').value
        console.log(nombre)
        console.log(contra)
	
	if(nombre == "" || contra == ""){
		console.log("campos vacios")
	}else{
		console.log("ambos campos con informacion")
		// primero convertimos los datos en un objeto 
		const data = {
			"nombre" : nombre,
			"contra" : contra
 		}
		// ahora si usamos fetch para mandar la informacion 
		fetch('http://localhost:3000/ruta',{
			method : 'POST',
			headers : {
				'Content-Type' : 'application/json' // le indicamos al server que le amndermos datos tiupo json 

			},
			body : JSON.stringify(data) // mandmos los datos en tipo json 
		})
		.then(response => {
			if(!response.ok){
				console.log('no se pudop conectar al sever')
			}
			return response.json()
		})
		.then(data => {
			// cuando recivamos respuesta del server 
		})
		.catch(error => {
			console.log(error)
		})
	}
    })

})
