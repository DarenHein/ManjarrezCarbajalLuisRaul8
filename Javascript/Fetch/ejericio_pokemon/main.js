

/*


 ____       _           _          _
|  _ \ ___ | | _____   / \   _ __ (_)
| |_) / _ \| |/ / _ \ / _ \ | '_ \| |
|  __/ (_) |   <  __// ___ \| |_) | |
|_|   \___/|_|\_\___/_/   \_\ .__/|_|
                            |_|

*/

document.addEventListener('DOMContentLoaded' , function(){
    var boton = document.getElementById('boton')

    boton.addEventListener('click' , function(){
        var numero = document.getElementById('numero').value
	var mensaje = document.getElementById('mensaje')
	var nombre = document.getElementById('nombre')
	var pokedex = document.getElementById('pokedex')
	var tipo = document.getElementById('tipo')
	var imagen = document.getElementById('imagen')
        // Verificar si el campo está vacío
        if(numero === ""){
            console.log("El campo está vacío");
	    mensaje.innerHTML = "campo vacio"
        } else {
            console.log("Todo bien");
            // Aquí puedes continuar con tu lógica
		if(isNaN(numero)){
			console.log("ingresaste una cadena")
			mensaje.innerHTML = "Ingresaste una cadena"
		}else{
			// hasta este punto empiezan las validaciones numericas
			var numero2 = parseInt(numero)
			if(numero2 <= 0 || numero2 > 1000){
				mensaje.innerHTML = "Numero incorrecto"
			}else{
				// hasta este punto ya empezamos la api 
				var url = 'https://pokeapi.co/api/v2/pokemon/' + numero
				fetch(url)
				.then(response => {
					if(!response.ok){
						console.log("no se pudo conectar ")
					}else{
						console.log("conexion exitosa")
						return response.json()
					}
				})
				.then(data => {
					// empezamos a manjear lso datos 
					//mensaje.innerHTML = data.name
					nombre.innerHTML = data.name
					const tipos = data.types.map(type => type.type.name);
					pokedex.innerHTML = numero
					tipo.innerHTML = tipos
					const imageURL = data.sprites.front_default;
					imagen.src = imageURL
				})
			}
		}
        }
    })
})
