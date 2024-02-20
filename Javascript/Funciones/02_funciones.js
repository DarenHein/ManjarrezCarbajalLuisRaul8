
// Exprecion de funcion 
/**
 * es aquella que sale ne le momento de la ejecucion 
 * puede estar dentro de otra funcion o afuera 
 * 
 */

// ejemplo fuera de una funcion 

var suma = function(a,b){
    var resultado = a + b 
    return resultado
}

var resultado = suma(1,2)
var resultado2 = suma(2,4)

console.log(resultado)
console.log(resultado2)