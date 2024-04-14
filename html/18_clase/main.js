

// que vamos a ahcer aqui 
// vmaos a crear una tabla dinemica con puros for 

document.addEventListener('DOMContentLoaded',function(){
    // ahora tomamos el id del boton 
    var boton = document.getElementById('boton')

    // ahora el evento del boton
    boton.addEventListener('click' , function(){
        var tabla = document.createElement('table')
        tabla.setAttribute('border','1')
        // ahora con un for agregare elementos ala tabla o encavezados 
        var fila = document.createElement('tr')
        tabla.appendChild(fila)
        var max_enca = 3 
        for(let i = 0 ; i < max_enca ; i++ ){
            var enca = document.createElement('th')
            
            var nombre = 'Enca' + i
            enca.innerHTML = nombre
            fila.appendChild(enca)
        }
        document.body.append(tabla)
    })
})