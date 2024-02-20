// Exprecion funcion 

/**
 * Explcaicion de este codigo la funcion principal recibe trea parametros 
 * a,b,operciaon 
 */

function funcion_principal(a,b,operacion){// recibe treas aprametros 
    var resultado = operacion(a,b) // manda allamar ala funcion y les manda sus mismos pramtros 
    return resultado
}

var suma = function(a,b){ // estas son funciones exprecion que solo cunplen una funcion 
    return a + b 
}

var resta = function(a,b){
    return a - b 
}

var multiplicacion = function(a,b){
    return a * b 
}

var resultado = funcion_principal(1,2,suma)
console.log(resultado)
var resultado2 = funcion_principal(22,12,resta)
console.log(resultado2)
var resultado3 = funcion_principal(22,45,multiplicacion)
console.log(resultado3)