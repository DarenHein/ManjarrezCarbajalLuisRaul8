// 7. Crea una función que reciba un array de números y retorne el mayor.

function mayor(array){

    let primer = array[0]

    for (let elementos of array){

        console.log(elementos)
        if (primer > elementos){

        }else {
            primer = elementos
        }

    }

    console.log("numero mayor es -> " , primer)
}

let arreglo = [113,2,487,5999,12]
mayor(arreglo)