// Ejercicio 1: Verificación de Edad
// Descripción: Crea una función que tome un número como entrada y devuelva una promesa. La promesa debe resolverse si el número es mayor o igual a 18, indicando que la persona es mayor de edad. Si el número es menor a 18, la promesa debe rechazarse indicando que la persona es menor de edad.


function funcion(numero){
    return new Promise((resolve,reject) => {
        let resultado = numero == 2 
        if(resultado){
            resolve("Todo esta bien ")
        }else{
            reject("todo esta mal ")
        }
    })
}

funcion(12)
    .then(mensaje => {
        console.log(mensaje)
    })
    .catch(error => {
        console.log(error)
    })

    /**
     * 
     * then cunado una promesa se maneja de manera de forma exitosa 
     * catch -> recoje la promesa cuando esta rechazada 
     */