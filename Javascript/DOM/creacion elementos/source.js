// creacion de un elemento en js 
/**
 * en este ejemplo creare un etiqueta p desde js 
 */

// creamos el evento 
document.addEventListener('DOMContentLoaded' , function(){
    var boton = document.getElementById('boton')

    boton.addEventListener('click' , function(){
        // creamos el elemento 
        var parrafo = document.createElement('p')
        // agregamos el contenido al elemento 
        parrafo.textContent = "hola mundo"
        // mandmos el elemento al html 
        document.body.appendChild(parrafo)
    })
})