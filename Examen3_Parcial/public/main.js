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
        mostrar_detalles()
    })

    imagen2.addEventListener('click' , function(){
        console.log("hola mundo 2 ")
        mostrar_detalles()
    })

    imagen3.addEventListener('click' , function(){
        console.log("hola mundo 3 ")
        mostrar_detalles()
    })

    imagen4.addEventListener('click' , function(){
        console.log("hola mundo 4 ")
        mostrar_detalles()
    })

    imagen5.addEventListener('click' , function(){
        console.log("hola mundo 5 ")
        mostrar_detalles()
    })
})

function mostrar_detalles(){
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
}