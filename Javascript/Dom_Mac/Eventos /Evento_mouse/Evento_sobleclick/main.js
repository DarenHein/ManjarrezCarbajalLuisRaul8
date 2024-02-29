// evento doble click 
/**
 * como su nombre lo indica al hacer doble click inidcia el evento 
 * 
 * 
 */
var elemento
document.addEventListener('DOMContentLoaded' , function(){
    elemento = document.getElementById('titulo')
    // aremos dos evtnot el de clik yel de doble 

    elemento.addEventListener('click',function(){
        elemento.style.color = "blue"
    })
    elemento.addEventListener('dblclick' , function(){
        elemento.style.color = "red"
    })
})