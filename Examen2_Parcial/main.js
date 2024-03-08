// lo vamos a manejar por evnetos 

document.addEventListener('DOMContentLoaded' , function(){
    // tomamos el ide del boton 
    var boton = document.getElementById('boton')

    boton.addEventListener('click' ,function(){
        // mandmos a llamar ala funcion de valuidacion 
        validaciones()
    })
})

function validaciones(){
    // primer validacion de campo vacio 

    var campo_numerico = document.getElementById('amount').value 
    var mensaje = document.getElementById('span1')
    mensaje.innerText = " "

    if(campo_numerico == ""){

        mensaje.innerText = "No ingresaste nada"

    }else {
       var bandera = isNaN(campo_numerico)

       if(bandera == true){
        mensaje.innerText = "Es una Cadena"
       }else{
        mensaje.innerText = "Es un Numero"
        // ahora podemos trabajar ocn numeros 
        var numero = parseFloat(mensaje)
        if (numero <= 0 ){
            mensaje.innerText = "Numero invalido"
        }else {
            // creo que son todas las validaciones o lo limito a 100 es que no se jajajaj 
            
        }
       }

    }


}