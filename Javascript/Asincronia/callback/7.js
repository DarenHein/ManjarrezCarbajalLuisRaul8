
//Crea una función temporizador que tome un número de segundos y un callback. La función debe esperar el número de segundos especificado antes de ejecutar el callback.

function temporizador(segundos, callback) {
    // Tu código aquí
 	console.log("Trabajando y en " ,segundos , "Empeiza el call back ")
	setTimeout(()=> {
		callback()
	}, segundos)
}

function funcion2(){
	console.log("ya llegue perra")
}
let tiempo = 2000
temporizador(tiempo,funcion2)



