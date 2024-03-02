
// vamos a crear un servidor basrico en js 
/**
 * un servidor basico 
 * es como un suoer asistente que puede ayudarnos en diversas tareas como 
 * mostrar una web 
 * lamacenar imagenes 
 * 
 */

// todo primero importamos la libreria que ocuparemos la http 
const http = require('http')
// libreria http en js siver para comunicaciones con servidores web 

// ahora creamos el servidor con lso dos paramretos 
/**
 * req = requerimiento del cliente 
 * res = respuesta de el servidor 
 */
const servidor = http.createServer((req,res) => {
    //  "La respuesta es positiva y el formato del mensaje es de texto simple".

    res.writeHead(200,{'Content-type':'text-plain'})
    /**
     * desgloce de esta linea 
     * res.wruteHead es como la el preludio de la respuesta 
     * 200 es el codigo http diciando que todo esta bien 
     * conten-type : 'text_plain' es el contenido de nuestra carta o de la respuesta es como si dijiera la crata contiene un documento de tipo texto plano 
     */

    // todo ahora enviaremos el cuarpo de la carta al usuario 

    res.end("hola desde el servidor de daren ")
})

/**
 * con todo la parte de arruba es como el esqueleto basico de un sercidor wen 
 * 
 * ahora necesitamos darle una direccion apra que el usuario pueda identificar nuestra pagina web 
 */

const puerto = 3000
servidor.listen(puerto,'127.0.0.1',() =>{
    console.log(`Servidor en ejecución en http://127.0.0.1:${puerto}/`);
})

//todo explicacion de esta linea de codigo 

/**
 * necesitamos que nuestro servidor tenga una direccion apra que el cliente pueda acceder a el 
 * 
 * puerto es como el numero a llammar al negocio que siempre esta ala escucha 
 * 
 * sercidor.listen es como el negocio ya esta abierto pueden venir mi direccion y numero es .... 
 */