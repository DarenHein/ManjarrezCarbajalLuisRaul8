

// vamos a hacer dos sumas con parametros 
// una ruta con sod aprametros de ruta y a estos los vamos a sumar 


const express = require('express')
const app = express()

app.get('/usuario/:numero/:numero2' , (req,res) => {

// ambos direcciones numero y numero 2 son parametro;s que al revibirlos 
// aran algo 

	const numero = parseInt(req.params.numero) // toiomamos el primero nnumero de la url 
	const numero2 = parseInt(req.params.numero2) // tomamos el segundo numero i lo tranformamos a int 
	const resultado = (numero + numero2).toString() // el resultado y en la misma linea lo tranformamos a Strinmg 
	res.send(resultado) // mostramos el resultado 
})

app.listen(3000 , () => { // abrimos el canbgarro 
	console.log('servidor listo enm el puerto 3000')

})
