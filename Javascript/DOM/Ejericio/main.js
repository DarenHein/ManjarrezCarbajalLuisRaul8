/**
 * 
 * vamos  hacer un pqieño ejercico que cunado pasemos el cursor en un h1 cuenta las veces que se activa el evento 
 */


// variables 

let contador = 0 
var elemento

// evetno de carga de elementos 
document.addEventListener('DOMContentLoaded',function(){
    // 
    elemento = document.getElementById('titulo')

    elemento.style.color = "black"
    elemento.style.backgroundColor = "gray"

    elemento.addEventListener('mousemove',function(){
        elemento.style.color = "red"
        // ahora cada ves que pasemos el cursor por el elemento se sumara un uno ala contador 
        contador++
        console.log(contador)
    })

    elemento.addEventListener('mouseleave',function(){
        elemento.style.color = "blue"
        contador = 0 
    })
})