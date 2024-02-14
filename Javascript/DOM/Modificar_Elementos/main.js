// aqui va toa la logica 

document.addEventListener('DOMContentLoaded', function(){ // ocupamos un evento apra que cargue la apgina antes de realizar la accion 

    // primero tomasmos las caosas de los datos 
    var imagen = document.getElementById('imagen') // selecionamos los elementos que vamos a ocupar 
    var boton = document.getElementById('boton') // seleccionamos el elemento que vamos a ocuapr 

    boton.addEventListener('click' , function(){ // creamos un evento al presionar el boton 
        /**
         * el metodo setAtributte nos eprmite establcer desde js los atributos que deseamos modificar 
         * el primer paramtro es el atributo html 
         * el seguno el dato a modificar 
         */
        imagen.setAttribute("src" , "b2.png") 
        imagen.setAttribute("title" , "Imagen nueva ")
    })


})