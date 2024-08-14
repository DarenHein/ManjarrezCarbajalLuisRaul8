//Ejercicio 1: Simulación de Tarea Asíncrona
//Descripción: Crea una promesa que simule una tarea asíncrona, como la descarga de datos, y se resuelva después de 3 segundos. La promesa debe devolver un mensaje "Datos descargados" al completarse. Usa .then() para imprimir el mensaje cuando la tarea se complete.


let p = new Promise((resolve,reject) => {
	setTimeout(() => {
		resolve("Descarga Terminada")
	},3000)
})

p
.then(resultado => {
	console.log(resultado)
})
.catch(error => {
	console.log("error en la descarga")
})
