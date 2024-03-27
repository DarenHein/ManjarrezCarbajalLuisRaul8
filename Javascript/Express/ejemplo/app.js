

// vamos a crear una aplicacion server con los conocimientos que ya tengo 

// librerias 
const express = require('express')
const app = express()

/*
ahora explicare este ejericio 
\
en una ruta get que este con la raiz 
sera el index que si entra en el indexz acecas saldra hola muindo 
oeri agbra un parametro id que si ingresa un nombre de lkla  frutas 
lo mandara a esa pagina 

*/ 

app.get('/:id' , (req,res) => {

	// tomamos el parametro de la respuesta 
	const id = req.params.id 
	if (id == 'manzana'){
		res.send('manzana')

	}else if (id == 'naranja' ){

		res.send('naranja')
	}else if (id == ''){

		res.send('no escojiste niguna opcion'); 
	}else {

		res.send('puto')
	}

})

app.listen(3000, () => {

	console.log('aplicaion corriendo en el puerto 3000')


})
