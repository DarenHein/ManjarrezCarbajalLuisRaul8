
document.addEventListener('DOMContentLoaded' , function(){


    var boton = document.getElementById('boton')
    boton.addEventListener('click' , function(){
        var campo = document.getElementById('nombre').value
        var mensaje = document.getElementById('mensaje')
        var usuario = document.getElementById('usuario')
        if(isNaN(campo) || campo == ""){
            mensaje.innerHTML = "campos vacios o caracteres"
        }else {
            //mensaje.innerHTML = "todo bien"
            var numero = parseInt(campo)
            if(numero <= 0 ){
                mensaje.innerHTML = "numero menor o igual a 0 "
            }else{
                // aqui ya empieza el server 
                var url = "http://127.0.0.1:3000/alumnos/" + campo
                fetch(url)
                    .then(response => {
                        if(!response.ok){
                            mensaje.innerHTML = "no se pudo coenctar"
                        }else {
                            return response.json()
                        }
                    })
                    .then(data => {
                        
                            var nombre = data.map(alumno => {
                                const h1nombre = document.createElement('h1')
                                h1nombre.innerHTML = alumno.nombre

                                const h1apellido = document.createElement('h1')

                                h1apellido.innerHTML = alumno.apellido

                                document.body.appendChild(h1nombre)

                                document.body.appendChild(h1apellido)

                            })
                                                  

                    })
            }
        }
    })
})