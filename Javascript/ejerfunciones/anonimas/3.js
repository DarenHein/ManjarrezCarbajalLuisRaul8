// 3. **Multiplicación de números en un array**:
//    - Crea una función anónima que tome un array de números y devuelva un nuevo array con cada número multiplicado por 2. Asigna esta función a una variable llamada `multiplicaPorDos`.


const newarray = function(array){
    let newarray2 = []
    for(let elementos of array){
        // return elementos * 2   
        newarray2.push(elementos * 2) 
    }

    return newarray2
}

const array = [12,2,2]
console.log(newarray(array))