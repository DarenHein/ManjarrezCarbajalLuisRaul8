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

        var h2 = document.createElement('h2')
        h2.innerHTML = "Marca : " + valores[2]
        h2.style.position = 'absolute'
        h2.style.top = '25%'
        h2.style.left = '47%'
        h2.style.fontSize = "22px"
        div_general.appendChild(h2)

        var h2 = document.createElement('h2')
        h2.innerHTML = "Franquicia : " + valores[3]
        h2.style.position = 'absolute'
        h2.style.top = '30%'
        h2.style.left = '47%'
        h2.style.fontSize = "22px"
        div_general.appendChild(h2)

        var h2 = document.createElement('h2')
        h2.innerHTML = "Descripcion : " + valores[4]
        h2.style.position = 'absolute'
        h2.style.top = '35%'
        h2.style.left = '47%'
        h2.style.fontSize = "22px"
        div_general.appendChild(h2)

        var h2 = document.createElement('h2')
        h2.innerHTML = "Precio : " + valores[5]
        h2.style.position = 'absolute'
        h2.style.top = '42%'
        h2.style.left = '47%'
        h2.style.fontSize = "22px"
        div_general.appendChild(h2)

        var h2 = document.createElement('h2')
        h2.innerHTML = "Stock : " + valores[6] + "Pzs"
        h2.style.position = 'absolute'
        h2.style.top = '47%'
        h2.style.left = '47%'
        h2.style.fontSize = "22px"
        div_general.appendChild(h2)

        var h2 = document.createElement('h2')
        h2.innerHTML = "F.Lanzamiento : " + valores[7]
        h2.style.position = 'absolute'
        h2.style.top = '52%'
        h2.style.left = '47%'
        h2.style.fontSize = "22px"
        div_general.appendChild(h2)

        var h2 = document.createElement('h2')
        h2.innerHTML = "Estado : " + valores[8]
        h2.style.position = 'absolute'
        h2.style.top = '57%'
        h2.style.left = '47%'
        h2.style.fontSize = "22px"
        div_general.appendChild(h2)

        var boton = document.createElement('button')
        boton.textContent = "Carrito"
        boton.style.position = "absolute"
        boton.style.top = "65%"
        boton.style.left = "47%"
        div_general.appendChild(boton)

        var boton2 = document.createElement('button')
        boton2.textContent = "Copmprar"
        boton2.style.position = "absolute"
        boton2.style.top = "65%"
        boton2.style.left = "64%"
        div_general.appendChild(boton2)


    })
    .catch(error => {
        console.log("error encontrado" , error)
    })
}