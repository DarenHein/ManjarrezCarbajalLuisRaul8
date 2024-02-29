/**
 *  cuadro (div u otro elemento) en la página.
Un contador que se inicialice en 0.
Un evento que se dispare cuando el mouse pasa sobre el cuadro (mouseover).
El evento deberá incrementar el contador en 1 cada vez que se dispare.
Mostrar el valor actual del contador en la consola del navegador después de cada incremento.
Otro evento que se dispare cuando el mouse sale del cuadro (mouseout).
Este evento deberá restaurar el color original del cuadro y reiniciar el contador a 0.
 */

var contador = 0 
var elemento 

document.addEventListener('DOMContentLoaded',function(){

    elemento = document.getElementById('div')
    
    elemento.addEventListener('mousemove',function(){
        elemento.style.backgroundColor = "red"
        contador++
    })

})