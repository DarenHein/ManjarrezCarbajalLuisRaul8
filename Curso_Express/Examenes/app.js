/*

¡Por supuesto! Aquí tienes un examen práctico de Express que puedes resolver:

---

**Examen Práctico de Express**

### Instrucciones:
1. Crea una nueva aplicación Express.
2. Completa cada pregunta escribiendo el código necesario en el archivo `app.js`.
3. Comenta tu código para explicar lo que estás haciendo en cada parte.
4. Ejecuta tu aplicación y verifica que cada pregunta esté funcionando correctamente.

### Preguntas:

1. **Ruta GET**: Crea una ruta GET en la raíz de la aplicación que responda con un mensaje de bienvenida.

2. **Middleware Logger**: Crea un middleware que registre en la consola cada solicitud que llegue a la aplicación.

3. **Ruta POST**: Crea una ruta POST en `/usuarios` que acepte un objeto JSON con los campos `nombre` y `correo` y responda con un mensaje de confirmación.

4. **Manejo de errores**: Implementa un middleware de manejo de errores que responda con un mensaje de error genérico cuando ocurra un error en la aplicación.

5. **Middleware de 404**: Implementa un middleware que responda con un mensaje de "Ruta no encontrada" cuando se intente acceder a una ruta no definida en la aplicación.

---

¡Buena suerte! Si tienes alguna pregunta o necesitas más ayuda, no dudes en preguntar.


*/

const express = require('express')
const app = express()


// creamos el logger
app.use((req,res,next) => {
	console.log("solicitud recibida")
	console.log("Ruta solicitada => " , req.url)
	console.log("Metodo solicitado => " , req.method)
	next()
})

// creamos el midleware que acepte datos json 
app.use(express.json())

// pregunta 1 
app.get('/', (req,res) => { // creamos una ruta principal y con el metodo get 
	res.send("Bienvenido ala ruta principal") // mandamos como respuesta un saludo 
})
// pregunta dos 
app.post('/usuarios' , (req,res) => {
	var objeto = req.body
	var longitud = Object.keys(objeto).length
	console.log("DAtos recibidios " , req.body)
	if(longitud == 0){
		res.send("no envisate ningun dato")
	}else{
		res.send("Datos Recibidos Bienvenido")
	}
})

//creamos una ruta use para las rutas que no existen en nuestro server 
app.use((rea,res) => {
	res.status(404).send("La ruta ala que tratas de ingresar no existe")
})

app.listen(3000,() => {
	console.log("aplicacion corriendo en el puerto 3000")
})
