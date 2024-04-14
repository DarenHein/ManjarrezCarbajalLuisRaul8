
// emepzamos con el evento de cajon 

// lo unico que vamos a hacer aqui es gregar una tabla desde js de manera manual  


document.addEventListener('DOMContentLoaded',function(){

    // tomamos ell id del boton 
    var boton = document.getElementById('boton')
    boton.addEventListener('click' , function(){
        var titulo = document.createElement('h1')
        titulo.innerHTML = 'hola mundo'
        document.body.appendChild(titulo)

        // ahora vamos a crear la tabla sencilla para enteder el proceso 
        // creamos la tabla 
        var tabla = document.createElement('table')
        tabla.setAttribute('border','1')
        // ahora crearemos la fila y la agraremos ala tabla 
        var fila = document.createElement('tr')
        // ahora a este file le crearemmos una celda con un dato 
        var celda = document.createElement('td')
        celda.innerHTML = 'encabezado'
        // ahora agregamos la celda al la fila 
        fila.appendChild(celda)
        // ahora la fila ala tabla 
        tabla.appendChild(fila)
        // y por ultimo la tabla al html 

        document.body.appendChild(tabla);

    })
})