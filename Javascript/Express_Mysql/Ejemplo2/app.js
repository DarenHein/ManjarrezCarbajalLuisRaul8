

/*
aqui vamos a ahacer un ejemplo de una abse de datos 
con expreess y html que aremos 

en la base de datos ya hay un dato registrado 
lo que aremos es que desde el html y cun form 
validaremos si el usuario existe o no en la base de datos 
*/

// librerias 
const express = require('express')
const path = require('path')
const mysql = require('mysql')
const app = express()


// midleware global para decodificar datos de la ulr 

app.use(express.json()) // transofrma los json a objto js 
app.use(express.urlencoded({ extend : true })) // toma lso datos de la url y los 
// transofrma a objetos )


// conexion con la base de datos 

const conexion = mysql.createConnection({
	host : '127.0.0.1', 
	user : 'daren', 
	password : '5882', 
	database : 'test'
})

// verificamos si la conexion es exitosa o no 

conexion.connect((error) => {
	if (error){
		console.log('error en la conexion ala base de datos' , error )
	}else {
		console.log('conexion exitodsa con la base de datos ')
	}

})
 // primero mostramos la pagina que queremos desde express por la ruta principal 

app.get('/' , (req,res) => {

	res.sendFile(path.join(__dirname,'index.html'))
})

// ahora vamos a darle uso al html con su cuestionario 


app.post('/user' , (req,res) => {
	// primero tomamos los datos de la url o del cuerpo 
	const correo = req.body.correo
	const contra = req.body.contra
	// ahora hacemos el query 
	const consulta = 'select * from personas where correo = ? '
	conexion.query(consulta , [correo] , (error,resultado) => {
		if(error){
			res.send('error' , error )	
		}else {
			if(resultado.length > 0){
				res.send('usuario registrado')
			}else {

				//res.send('usuario no registradp')
				// en ves de mandar el mensaje de error lo 
				// mandaremos ala pagina de registrarse 
				// creando otro archivo html
				res.sendFile(path.join(__dirname , 'registro.html'))
			}
		}

	})

})

// ahora intentare agregar una personas desde otro formulario 
app.post('/registro' , (req,res) => {

	// primero tomasmos los datos de la url ys decodificados por 
	// los middleware que psusimos arriba 
	const correo = req.body.correo
	const contra =req.body.contra

	// ahora empezamos con la consulta 
	//
	const consulta = 'insert into personas(correo,contra) values (?,?) '

	conexion.query(consulta,[correo,contra] , (error) => {
		if(error){
			console.error('error en la consulta ' , error)
		}else {

			res.send('registro exitoso')
		}

	})

})
// ahora abrimos el changarro  

app.listen(3000 , () => {
	console.log('aplicaion corriendo en el puerto 3000')
})
