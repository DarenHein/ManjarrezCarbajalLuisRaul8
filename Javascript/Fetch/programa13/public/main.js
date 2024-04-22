
document.addEventListener('DOMContentLoaded' , function(){


    var boton = document.getElementById('boton')
    var boton2 = document.getElementById('boton2')
    var boton3 = document.getElementById('boton3')
    boton.addEventListener('click' , function(){
        var campo = document.getElementById('nombre').value
        var mensaje = document.getElementById('mensaje')
        var usuario = document.getElementById('usuario')
        var div_tablas = document.getElementById('mi_div4')
        div_tablas.innerHTML = ''
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
                            var arreglo = data
                            var llaves = Object.keys(arreglo[0])
                            var valores = Object.values(arreglo[0])
                            var tabla = document.createElement('table')
                            tabla.setAttribute('border','1')
                            var fila = document.createElement('tr')
                            // ahora agregamos las celdas 
                            for (let i = 0 ; i < llaves.length ; i++){
                                var celda = document.createElement('th')
                                celda.innerHTML = llaves[i]
                                fila.appendChild(celda)
                            }
                            tabla.appendChild(fila)
                            // ahora agregaremos los datos del dicionario 
                            var fila2 = document.createElement('tr')
                            // a esa fila le agregaremos los datos 
                            for (let i = 0 ; i < valores.length ; i++ ){
                                var celda = document.createElement('td')
                                celda.innerHTML = valores[i]
                                fila2.appendChild(celda)
                            }
                            tabla.appendChild(fila2)
                            div_tablas.appendChild(tabla)
                            
                            
                                               

                    })
            }
        }
    })

    // aqui va el boton 2 uqe muestra todo 

    boton2.addEventListener('click' , function(){
        // damos la url 
        var div_tablas = document.getElementById('mi_div4')
        div_tablas.innerHTML = ''
        const url = "http://127.0.0.1:3000/todos/"
        fetch(url)
            .then(response => {
                if(!response.ok){
                    mensaje.innerHTML = "no se pudo conectar"
                }else{
                    return response.json()
                }
            }) 
            .then(data => {

                // aqui creaaremos la tabla 
                var arreglo = data 

                // primero vamos a aver a cusntos elementos tiene el arreglo 

                var elementos = arreglo.length

                // ahora los titulos de la tabla 
                var titulos = Object.keys(arreglo[0])

                // creamos la tabla 
                var tabla = document.createElement('table')
                tabla.setAttribute('border','1')
                // creamos la fila de titulos 
                var fila = document.createElement('tr')

                for (let i = 0 ; i < titulos.length ; i++){
                    // creamos los encabesados 
                    var celda = document.createElement('th')
                    celda.innerHTML = titulos[i]
                    fila.appendChild(celda)
                }
                tabla.appendChild(fila)

                // ahora vierne lo dificil que es los datos de cada elemento agregarlos ala tabla 

                for (let i = 0 ; i < elementos ; i++){
                    var fila = document.createElement('tr')
                    var datos = Object.values(arreglo[i])
                    for(let j = 0 ; j < datos.length ; j++){
                        var celda = document.createElement('td')
                        celda.innerHTML = datos[j]
                        fila.appendChild(celda)
                    }
                    tabla.appendChild(fila)
                }

                //document.body.appendChild(tabla)
                div_tablas.appendChild(tabla)
                

            })
            .catch(error => {
                console.error(error)
            })
    })

    // ahora el boton de profesores 
    boton3.addEventListener('click' , function(){
        div_tabla = document.getElementById('mi_div4')
        div_tabla.innerHTML = ''
        var url = "http://127.0.0.1:3000/docentes/"
        fetch(url)
        .then(response => {
            if(!response.ok){
                console.log("error")
            }else{
                return response.json()
            }
        })
        .then(data => {
            var arreglo = data
            var longitd = arreglo.length
            var titulos = Object.keys(arreglo[0])
            var tabla = document.createElement('table')
            tabla.setAttribute('border','1')
            var fila = document.createElement('tr')
            for (let i = 0 ; i < titulos.length ; i++){
                var celda = document.createElement('th')
                celda.innerHTML = titulos[i]
                fila.appendChild(celda)
            }
            tabla.appendChild(fila)
            // ahora vamos a llenar de datos la fila 
            for(let i = 0 ; i < longitd ; i++){
                // primero creamos la fila 
                var fila = document.createElement('tr')
                var datos = Object.values(arreglo[i])
                for(let j = 0 ; j < datos.length ; j++){
                    var celda = document.createElement('td')
                    celda.innerHTML = datos[j]
                    fila.appendChild(celda)
                }
                tabla.appendChild(fila)
            }
            div_tabla.appendChild(tabla)
        })
    })
})
