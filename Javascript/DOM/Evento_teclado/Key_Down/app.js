document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown' , function(tecla){
        var mensaje = document.getElementById('mensaje')
        // el evento keydown  sirve para cunado se presiona una tecla 
        var tecla = tecla.key // el metod .key nos devuelve el nombre de la tecla que esta siendo presionada 
        console.log(tecla) // imrpimirmos el nombre de la tecla 
        // ahora aremos algo cunado presione la tecla 
        switch(tecla){
            case 'ArrowUp': 
            mensaje.style.color = "red"
            break 
            case 'ArrowDown': 
            mensaje.style.color = "blue"
            break
            case 'ArrowLeft' : 
            mensaje.style.color = "green"
            break
            case 'ArrowRight' : 
            mensaje.style.color = "yellow"
            break
        }
    })
  });
  