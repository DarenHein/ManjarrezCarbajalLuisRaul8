// modifcando el color de un div con la propiedad style en js 

document.addEventListener('DOMContentLoaded' , function(){
    // selecionamos el ide que necesitamos 
    var div = document.getElementById('midiv')
    var boton = document.getElementById('boton')

    boton.addEventListener('click',function(){
        div.style.background = "blue"
    })
})