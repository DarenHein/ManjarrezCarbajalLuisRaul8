// 5. **Concatenar cadenas**:
//    - Crea una función anónima que tome dos cadenas y devuelva la concatenación de ambas. Asigna esta función a una variable llamada `concatenaCadenas`.

const conca = function(array,array2) {
    let concatenado = array.concat(array2)
    return concatenado
}

const array = [1,2,3]
const array2 = [4,5,6]

console.log(conca(array,array2))