// async y awit 
// asyn es una forma de manejar la asincronia mas raipo 
//


async function funcion(numero){

    return new Promise((resolve,reject) => {
        if(numero > 1 ){
            resolve("numero mayor a 1")
        }else {
            reject("numero menor a 1 ")
        }
    })

}

// ahora hacemos la llamda 
funcion (12)
    .then(mensaje => {
        console.log(mensaje)
    })
    .catch(error => {
        console.log(error)
    })