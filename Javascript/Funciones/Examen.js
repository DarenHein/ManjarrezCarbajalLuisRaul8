

// funcion que reciba dos parametros y los sume 
function funcion(a,b,operacion){
    let resultado = operacion(a,b)
    return resultado
}
const suma = function(a,b){
    return a + b 
}

let resultado = funcion(2,3,suma)
console.log(resultado)

// Crea un array llamado "nombres" con al menos tres nombres. Luego, crea una función llamada
// imprimirNombres que reciba un array como parámetro y muestre cada nombre en la consola.


function imprimirNombres(arreglo){
    let longitud = arreglo.length 
    for (let i = 0 ; i < longitud ; i++){
        console.log(arreglo[i])
    }
}
let arreglo_nombre = ["Luis","Kelly","Axel"]
imprimirNombres(arreglo_nombre)

// Selecciona un elemento HTML por su ID y cambia su contenido a "¡Hola, Mundo!" utilizando JavaScript.


document.addEventListener('DOMContentLoaded', function(){
    var boton = document.getElementById('boton')
    var mensaje = document.getElementById('mensaje')

    boton.addEventListener('click' , function(){
        mensaje.style.color="red"
        mensaje.innerText = "Mensaje"
    })
})