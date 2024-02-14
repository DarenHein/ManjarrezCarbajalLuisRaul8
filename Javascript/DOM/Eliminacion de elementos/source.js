// eliminacion de elementos en con js 

// creamos evenyo para que cargue primero la pagina 

document.addEventListener('DOMContentLoaded', function () {
    var boton = document.getElementById('boton')

    boton.addEventListener('click', function () {
        // tomamos el campo que desemos eleiminar 
        var elemnto = document.getElementById('titulo')
        // verificamos si existe el elemento 
        if (elemnto) {
            document.body.removeChild(elemnto)
        }
    })
})