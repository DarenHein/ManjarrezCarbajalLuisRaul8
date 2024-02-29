// vamos a ahcer que un div cambie de color cada 2 segundos 
/**
 * 
 * va a ver una lista de colores un arreglo y cambiara en aletoriamente 
 * 
 *
 */

// primera prueba sera 3 colores 

/**
 * ahora una explicacion de este codigo 
 * 
 */

// necesitmamso varoables globales (lcanxe scope)
var arreglo = ["red" , "blue" , "green" , "orange" , "purple"] // hacemos globales las 
var contador = 0 
var div  // delcaramos la variabel desde aca por las dudas 

document.addEventListener('DOMContentLoaded',function(){
    div = document.getElementById('div')
    const intervalo = setInterval(funcion,1000)
})

function funcion(){
    div.style.backgroundColor = arreglo[contador]
    contador = contador + 1
    if (contador > arreglo.length){
        clearInterval(intervalo)
    }

}