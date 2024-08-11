// Escribe una función sumaAsincronica que tome dos números y un callback. La función debe simular un retraso de 2 segundos antes de devolver la suma de los dos números utilizando el callback.

function sumadosnumero(a,b,callback){

    // primero hacemos la suma de los numeros y creo que le mandmos el resultado de la suma a callback
    let c = a + b
    console.log("Es perando la suma de : " , a , "+" , b , "...")
    setTimeout(() => {
        callback(c)
    },2000)

}

function funcion2 (c){
    console.log("el resultado de la suma es : " , c )
}

sumadosnumero(5,5,funcion2)