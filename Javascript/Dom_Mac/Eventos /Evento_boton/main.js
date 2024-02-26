// ahora aremos un eevto de boton en js que aparesca un texto 

//primero el evtno de cajon 

document.addEventListener('DOMContentLoaded',function(){
    var boton = document.getElementById('boton') // obtenemos el id del boton 
    boton.addEventListener('click',function(){

        /**
         * el vento de arriba sus aprametros son click 
         * click es un evento que cunado se precione un elemento ocurrira lo que se encuntra lo que esta dentro de este 
         */

        var mensaje = document.createElement('div') // en este caso creara un div 
        mensaje.innerText = "hola mundo" // se el agregara el mensaje hola mundo 
        document.body.appendChild(mensaje) // y posterir se agregara al cuerpo del html 

    })

    // el evento clikc no esta limitado solo a botones si no a todos los elementos de html que sean clickeboles todos ajajaja 

    // ahora ocuparemos un h1 que al clickaerlo cambiara de color 

    var titulo = document.getElementById('titulo') // id ligado a un h1 en el html 

    titulo.addEventListener('click',function(){ // creamos el evento que al ser presioando el h1 
        titulo.style.color = "red" // cambaira a color rojo
    })
})