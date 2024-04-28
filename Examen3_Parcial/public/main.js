// todo orimero el evento de carga de elemntos de sistemas 

document.addEventListener('click' , function(){
    // ahroa primero vamos a tomar los elementos de cada imagen y con un evento click que 
    // amplie los elementos de esa figura tomandolo de la base de datos 
    var imagen1 = document.getElementById('imagen1_1')
    var imagen2 = document.getElementById("imagen2_2")
    var imagen3 = document.getElementById("imagen3_3")
    var imagen4 = document.getElementById("imagen4_4")
    var imagen5 = document.getElementById("imagen5_5")

    // ahora los eventos de las imagenes 

    imagen1.addEventListener('click' , function(){
        console.log("hola mundo 1 ")
        var opcion = 1 
        mostrar_detalles(opcion)
    })

    imagen2.addEventListener('click' , function(){
        console.log("hola mundo 2 ")
        var opcion = 2 
        mostrar_detalles(opcion)
    })

    imagen3.addEventListener('click' , function(){
        console.log("hola mundo 3 ")
        var opcion = 3 
        mostrar_detalles(opcion)
    })

    imagen4.addEventListener('click' , function(){
        console.log("hola mundo 4 ")
        var opcion = 4 
        mostrar_detalles(opcion)
    })

    imagen5.addEventListener('click' , function(){
        console.log("hola mundo 5 ")
        var opcion = 5 
        mostrar_detalles(opcion)
    })
})

function mostrar_detalles(opcion){
    var div_general = document.getElementById("imagenes")
    var div_imagen = document.getElementById("imagen1")
    var div_imagen2 = document.getElementById("imagen2")
    var div_imagen3 = document.getElementById("imagen3")
    var div_imagen4 = document.getElementById("imagen4")
    var div_imagen5 = document.getElementById("imagen5")

    div_imagen.style.display = "none"
    div_imagen2.style.display = "none"
    div_imagen3.style.display = "none"
    div_imagen4.style.display = "none"
    div_imagen5.style.display = "none"

    div_general.style.height = '150%'

    switch(opcion){
        case 1 :
            var imagen = "images/luffy.jpeg" 
            var nombre = "lufy"
            break
        case 2 : 
             var imagen = "images/boa.jpeg"
             var nombre = "boa"
        break
        case 3 : 
             var imagen = "images/goku.jpeg"
             var nombre = "goku"
        break
        case 4 : 
             var imagen = "images/nezuco.jpeg"
             var nombre = "nezuco"
        break
        case 5 : 
             var imagen = "images/naruto.jpeg"
             var nombre = "naruto"
        break
    }

    var imagen_referencia = document.createElement('img')
    imagen_referencia.setAttribute("src", imagen)

    imagen_referencia.style.position = "absolute"
    imagen_referencia.style.top = "12%"
    imagen_referencia.style.left = "10%"
    imagen_referencia.style.width = "300px"
    div_general.appendChild(imagen_referencia);

    const url = "http://127.0.0.1:3000/mostrar/" + nombre

    fetch(url)
    
    .then(response => {
        if(!response.ok){
            // aqui hay que agregar una imagen
            console.log("error en la conexion con la url " , url)
        }else{
            return response.json()
        }
    })
    .then(data => {
        
        console.log(data)
        var arreglo = data 
        var llaves = Object.keys(arreglo[0])
        var valores = Object.values(arreglo[0])

        var h1 = document.createElement('h1')
        h1.innerHTML = valores[1]
        h1.style.position = 'absolute'
        h1.style.top = '10%'
        h1.style.left = '45%'
        h1.style.fontSize = "52px"
        div_general.appendChild(h1)



    })



    



}