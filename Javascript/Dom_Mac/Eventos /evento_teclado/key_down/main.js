// ahora aremos algo basico en js 
/**
 * el evnto de teclado es la forma de que al presioanr una tecla en el teclado js la reconosca y haga una accion con esta 
 */

// primero creamos el evento basico de cajon 

document.addEventListener('DOMContentLoaded',function(){
    // ahora crearemos el evneto de teclado 

    document.addEventListener('keydown' , function(event){
        // key down es para que al presionar la tecla pase 
        // el parametro evtn es el que guarda la infromacion de lo que esta sucediendo en el eventp 

        var tecla = event.key // key devuelve una cadena de la tecla presionada 

        // ahora aremos algo divertido al precionar alguna de las flechas imprimira algo en pantalla 

        switch(tecla){
            case 'ArrowUp' : 
                alert("flecha de arriba")
            break; 

            case 'ArrowDown' : 
                alert("flecha de abajo ")
            break

            default : 
                alert("no as presionado alguna de las teclas que espraba ")
            break
        }

        /**
         * que hace el codigo de arriba 
         * 
         * al presioanr una tecla de los casos 
         * flecha rriba o flecha abajo mandara un alert al nevagador 
         * si el usuario ingresa una tecla que no es el programa manddara un mensaje de que no espra esa tecla 
         */
    })
})