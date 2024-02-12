document.addEventListener('DOMContentLoaded',function(){

    // explicao esta linea de codigo 
    /**
     * document = hace referencia el html completo 
     * addEventListener = es un espera 
     * DOMContentLoades = es espera que todo el html cargue y chambeo 
     * function () = la funcion que va realizr cuando el evento se desacadene 
     *
     */

    // todo tomamos el dato del boton 
    var boton = document.getElementById("boton")

    //todo ahora creamoc el evnto del boton 

    boton.addEventListener('click' , function(){
        alert("presionaste el boton perro ")
    })

})