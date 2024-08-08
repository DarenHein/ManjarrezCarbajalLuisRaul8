// 15. Crea una función que reciba un array de números y retorne la suma de sus elementos.


// lo are de las dos formas 

function sumar(array){
    let acumulador = 0
    for (let i = 0 ; i < array.length ; i++){
        acumulador += array[i]
    }

    console.log(acumulador)
}

let array = [1,2,3,4,5]

sumar(array)

// ahora la forma con el metodo de array reduce 

const suma = array.reduce((acum,elemento) => acum + elemento , 0)
console.log(suma)