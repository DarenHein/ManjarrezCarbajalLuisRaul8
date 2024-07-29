// 4. **Filtrar números mayores que 10**:
//    - Crea una función anónima que tome un array de números y devuelva un nuevo array con solo los números mayores que 10. Asigna esta función a una variable llamada `filtrarMayoresQueDiez`.

const filtrar = function(array){
    let newarray = []
    for (let elementos of array){
        if(elementos > 10){
            newarray.push(elementos)
        }
    }

    return newarray
}

const array = [12,10,10,1,56]

console.log(filtrar(array))