/**
 * 
 * el evento keyup 
 * 
 * se dispara cunado dejamos de presioanr una tecla 
 * 
 */

// el evento de cajon de simepre 
document.addEventListener('click' , function(){
    // ahora crearemos el nuevo evento 
    document.addEventListener('keyup' , function(event){ // se activa el evento 
        alert(event.key) // ccuando se deje de presionar la tecla mandra el alert 
        var div = document.createElement('div') // creara un div 
        div.innerText = event.key // con la tecla que se dejo de presionar 
        document.body.appendChild(div) // se agrega esa tecla ala pantalla 
    })
})