
/**
 * 
 * funciones son bloques de codigo que trabajan en conjunto cunado se invocan 
 * 
 */

//todo funcion basica 

function saludar(){
    console.log("hola mundo")
}
// llamos ala funcion 
saludar()

//todo funciones con psae de parametros 

function sumar(a,b){
    let c = a + b 
    console.log(c)
}
// mandamos a llamr ala funcion que recibe dos prametros y muestra en pantalla el resultado 

sumar(2,3)

// todo funcion que retorna un valor 
// reciben dos o mas parametros y retorna un valor unico (se neceista una variable contenedora)

function resta(a,b){
    let c = a- b
    return c  
}

// mandamos a llemar ala funcion pero necesitamos una variable que la reciba 

let resultado = resta(2,4)
console.log(resultado)