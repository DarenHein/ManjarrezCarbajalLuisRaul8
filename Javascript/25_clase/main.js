
// sigamos con las tablas dinamicas en html y css 

document.addEventListener('DOMContentLoaded' , function(){
    // ahora sacamos el id del boton 
    var boton = document.getElementById('boton')
    boton.addEventListener('click' , function(){
        // ahroa vamos a crear la tabla 
        var tabla = document.createElement('tabla')

        // qye vamos a hacer con un for vamos a crear 3 filas 
        // y con un for anidado a cada fila le agregaremos 3 celdas 

        // primero la fila y las celadas de titulo 

        for(let i = 0 ; i < 1 ; i++){
            var fila = document.createElement('tr')
            for(let j = 0 ; j < 4 ; j++){
                var celda = document.createElement('th')
                celda.innerHTML = "Titulo" + j 
                fila.appendChild(celda)
            }
            tabla.appendChild(fila)
        }

        // for de las filas 
        for(let i = 0 ; i < 5 ; i++){
            var fila = document.createElement('tr')
                // ahora le adjutamos la celda a cada fila 
                for(let j = 0 ; j < 4 ; j++){
                    var celda = document.createElement('td')
                    celda.innerHTML = 'Dato' + j 
                    fila.appendChild(celda)
                }
                tabla.appendChild(fila)
        }
        document.body.appendChild(tabla)

    })
})

