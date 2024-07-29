// 2. **Verificar paridad**:
//    - Crea una función anónima que tome un número y devuelva `true` si es par y `false` si es impar. Asigna esta función a una variable llamada `esPar`.

const pariedad = function(numero){
    if(numero % 2 == 0){
        return true
    }else {
        return false 
    }
}

console.log(pariedad(5))