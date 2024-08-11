// Escribe una función mostrarMensaje que tome un mensaje y un callback. La función debe mostrar el mensaje después de 1 segundo y luego ejecutar el callback. Usa esta función para mostrar tres mensajes en orden, uno después del otro.


function funcion(mensaje,callback){
    // segun tiene que ser tres mensaje que tiene que imprimir ocuapre un for alv 
    let repeticiones = 3 
    console.log("Imprimirneod mensajes cada 1 segundo")

    setTimeout(() => {
        for (let i = 0 ; i < repeticiones ; i++){
            callback(mensaje)
        }
    },2000)
}
function funcion2(mensaje){
   console.log(mensaje)
}

funcion("Hola mundo" , funcion2)
