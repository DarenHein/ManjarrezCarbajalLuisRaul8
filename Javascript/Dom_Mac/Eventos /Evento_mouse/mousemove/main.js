/**
 * 
 * el evento de mouse
 * 
 * este evento se activa cuando pasamos el maouse por algun elemento del html es util en ocucaciones 
 * 
 * nombre : mousemove
 */

// evento que hace que carge toda la pagina 

document.addEventListener('DOMContentLoaded' , function(){
    // ahora tomamos el id del elemento que active el evento 

    var elemento = document.getElementById('titulo')
    // ahora emepzamoe el evento 
    elemento.addEventListener('mousemove' , function(){ 
        /**
         * el evento mouse move hacae que cuando el mouse o cursor pase por el elemento seleccionado suceda algo 
         */
        // en este caso que el texto cambie de color a rojo 
        elemento.style.color = "red"

    })
})