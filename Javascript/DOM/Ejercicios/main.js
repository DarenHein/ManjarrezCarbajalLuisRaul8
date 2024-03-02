// todo vamos a cambair color y tamaño de la letraocuapndo eventos selectorres 

document.addEventListener('DOMContentLoaded',function(){
    var etiqueta = document.getElementById('titulo')
    var etiqueta2 = document.getElementById('titulo2')
    var boton = document.getElementById('boton')
    var boton2 = document.getElementById('boton2')
    boton.addEventListener('click',function(){
        etiqueta.style.color = "red" // todo cambia el color de la letra 
        etiqueta2.style.color = "blue" // todo camboa el color de la latra 
        etiqueta.style.textAlign = "center" // todo cambia la posicion del texto enmedio 
        etiqueta.style.fontSize ='80px' // todo cambia el tamaño de la letra 
        etiqueta2.style.display = 'none' // todo desaparece el elemnto de la pantalla 
    })
    boton2.addEventListener('click',function(){
        etiqueta2.style.display = 'block' // todo aparece el elento en la pantalla 
    })
})