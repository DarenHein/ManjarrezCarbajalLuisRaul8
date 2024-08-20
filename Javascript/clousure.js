// closure 
// hay 3 terminos a recordar con este concepto 
// funcion padre funcion bebe y varibele con memoria 
/**
 * 
 * la funcion apdre retirna la funcion bebe 
 * la funcion bebe tiene accesoa  atodas las varibles dela funcion padre 
 * y simore que la mandemos a llamar las varibles tendran emmoria 
 */


function padre (){
    let numero = 0 
    function bebe(){
        numero ++
        console.log(numero)
    }

    return bebe // nota mental no  poner () = ejecutar 
    // si solo la mencioamos significa que la mandamos 
}

const resultado = padre()
resultado() // imprime 1 
resultado() // imprime 2 

// es por que la varibale numero que toma la varible de padre y esta tiene una especie de memoria 
