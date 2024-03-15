

/*
vamos a prender esto con una analogia 

este server es una carretra donde psasra las solicutdes los carros 
express es como un equipo de construccion ya hecho 
y app es la carretrea ue esamot sconstrueyndo 


*/



// vamoa a crear el server 

const express = require ('express')
const app = express()

// ahora damos la ubicacion 

/*
app = nuestra aplicacion 
get = metodo que nos permite manejar solicutdes .http 
es como obtenr la solicitud 
/ es la ruta principal por donde pasara 
(req y res) = son parametros de la funcion que definen que sucedera 
req = request o representa la solicitud del clinte 
res = responde propoorciona la respuesta de nuestro server 
res.send = envia una respuesta a nuestro cliente 

*/

app.get('/',(req,res) => {
	res.send("hola desde el server")
})

// necesitamos un puerto donde esta corriendo 

const puerto = 3000 

/*

listen = es un metodo de express para iniciar nuestro server 

() ={...} = una funcion que devolvera un callbak 

*/

app.listen(puerto , () => {
	    console.log(`Servidor Express escuchando en http://localhost:${puerto}`);
})
