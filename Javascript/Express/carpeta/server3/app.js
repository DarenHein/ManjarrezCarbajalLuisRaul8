// todo aqui va la aplicaion express 
const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

const bodyparse = require('body-parser')
// todo ahoqra ocupamos el middlwatre para dar acceso al public 
app.use(express.static(path.join(__dirname,'public'))) // srive para que tengamos acceso a todos los archivos estaticos de la crpeta public 
app.use(bodyparse.json()) // trasfroma los datos json a obj 
app.use(bodyparse.urlencoded({extended : true})) // mejor esta es elq ue si transfroma lso datos de json a obj apra jugar con ellos
 
// ahora creamos verifiquemos que el archiuvoio se encuentre en la ruta 
app.get("/crear" , (req,res) => {

    // todo aqui vamos a veririfcar si existe el archivo 
    const filepath = path.join(__dirname,'public' , 'index.html')
    if(fs.existsSync(filepath)){
        res.sendFile(path.join(__dirname,'public','index.html'))
    }else{
        res.send("No se puedo acceder ala pagina solicitada")
    }
})
// ahroa aremos una ruta por si alguien quere inciicar secion 
app.get("/login" , (req,res) => {

	const filepath = path.join(__dirname , 'public' , 'login.html')
	if(fs.existsSync(filepath)){
		res.sendFile(filepath)
	}else{
		res.send('no se puedo acceder ala pagina')
	}
})

// aqui creamos las rutas que mandan los datos de los fromularios 
app.post('/crearcuenta' , (req,res) => {
	const nombre = req.body.nombre
	const contra = req.body.contra 

	const nuevo_usuario = {
		"nombre" : nombre, 
		"password" : contra
	}
	// nombre del archivo json 
	const filename = nombre+'.json'
	// ahora tranformamos el dato a json 
	const datoJson = JSON.stringify(nuevo_usuario)
	// dar la ubicacion del archivo 
	const ruta = path.join(__dirname,filename)
	// ahora si creamos el archivo 
	fs.writeFile(ruta,datoJson, err => {
		if(err){
			res.send("error en la creacion del usuario")
		}else{
			res.send("usuario creado con exito")
		}
	})
})

// ahora aremos con el inicio de secion para que el usuario pueda iniciar sesion de 
// forma sencilla 

app.post('/iniciar', (req,res) => {
	const nombre = req.body.nombre
	const contra = req.body.contra
	// primero verificamos si exiet el archivo en la compu 
	const filename = nombre + ".json"
	const existe = path.join(__dirname,filename)
	if(existe){
		console.log('existe')
		// leemos el json 
		fs.readFile(path.join(__dirname,filename) , 'utf8' , (erro,data) => {
			if(erro){
				console.error("error al abrir json")
			}else{
				// osea que si existe lo leemos 
				const json = JSON.parse(data)

				//console.log(json)
				// llaves nombre password 
				if (json['nombre'] == nombre && json['password'] == contra){
					console.log('todo bien')
				}else {
					console.log("algun dato esta mal")
				}
				
				}
		})
	}else{
		console.log('no existe')
	}
})

module.exports = app 
