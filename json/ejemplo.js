/*

vamos a trabajar con archivo json 
vamos ac rearlo 
ocuapamos la libreria fs para manejo de rutas y creacion de archivos

*/

const fs = require('fs')

// ahora creamos una obj js 

const obj = {
	"nombre" : "Luis" , 
	"edad" : 30 , 
	"peso" : 80.30
}

// ahora tranformamos el obj a json 

const json = JSON.stringify(obj)

fs.writeFile("hola.json" , json , (error) => {
	if(error) {
		console.log("no se pudo crear el json")
	}else {
		console.log("json creado con exito")
	}

})
