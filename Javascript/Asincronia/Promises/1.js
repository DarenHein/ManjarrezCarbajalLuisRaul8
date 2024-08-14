
// promises ejemplo basico 
//
let p = new Promise((resolve , reject) => {
	let promesa = false 
	if(promesa == true){
		resolve("Tarea cumpolida con exito aqui esta tu recompensa")
	}else {
		reject("Tares no se puedo completar falla ")
	}
})


// ahora mandamos a llamar ala proomera 
//
p
.then(resultado => {
	console.log(resultado)
})
.catch(error => {
	console.log(error)
})
