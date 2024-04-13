// aqui va toda la aplicacion 

document.addEventListener('DOMContentLoaded' , function(){
     // primero vamos a tomar el campo de texto 
    //y presionar el boton haber si funciona 
    var boton = document.getElementById('boton')
    var mensaje = document.getElementById('mensaje') 
    mensaje.innerHTML = " "
    // ahora creamos el eenvto de teclado 
    boton.addEventListener('click' , function(){
        var campo = document.getElementById('numero').value   
        console.log(campo)
        // primeras validaciones 
        if(campo == ""){
            mensaje.innerHTML = "No as ingresado nada"
        }else{
            let numero = parseInt(campo)
            if (numero <= 0 || numero > 1000){
                mensaje.innerHTML = "Numero ingresado es invalido"
            }else {
                alert("todo bien")
            }

        }
    })
})