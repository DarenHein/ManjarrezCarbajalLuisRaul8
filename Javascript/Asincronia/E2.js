// jercicio 2: Dividir Números
// Escribe una función dividir que tome dos números y un callback. La función debe dividir el primer número por el segundo:

// Si el segundo número es 0, el callback debe ser llamado con "Error: División por cero" como error.
// Si no, el callback debe ser llamado con null como error y el resultado de la división como segundo parámetro.

function funcion(numero,numero2 , callback){
    setTimeout(() => {
        if(numero2 == 0){
            callback("El numero a dividir es cero")
        }else{
            let resultado = numero / numero2
            callback(null,resultado)
        }
    },2000)
}

function funcion2 (error, resultado){
    if(error){
        console.log(error)
    }else {
        console.log("El resultado de la divicion es de -> " , resultado)
    }
}

funcion(2,10,funcion2)