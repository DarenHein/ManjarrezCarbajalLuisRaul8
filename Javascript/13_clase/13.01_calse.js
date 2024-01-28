
// un ejemplo de clousures 

function mama_canguro(numero){ // primero recibe un parametro 
   
    numero = numero + 3  // hace una operacion con ese aprametro 
    var resultado = bebe_canguro(numero) // lo amnda y el resultado lo guarda en una variable 
    function bebe_canguro(numero){ // esta es la otra funcion que recibe ese parametro y hace otra operaciomn
        let resultado2 = numero + numero 
        return resultado2  
    }
    
    return resultado // mandamos la funcion 
  
}

let numero = 0 
var resultado = mama_canguro(numero) // esta variable ya recibio todo el desmadre de arriba 
console.log(resultado) // la muestra 
