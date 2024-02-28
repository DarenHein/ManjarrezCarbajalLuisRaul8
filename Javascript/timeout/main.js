/**
 * timeout es un metodo de js que funciona para progrmar la ejecucion de una funcion en un perido de tiempo 
 * 
 * recibe dos parametros uno que es la funcion y el otro el timepo en milisegundos de cuanto tarda en ejercurasa
 */

function saludar(){
    console.log("hola mundo")
}

// main 

setTimeout(saludar,5000)
/**
 * explicacion set time out recibe dos parametros 
 * 
 * saludar es la funcion que contiene la accion a realizar 
 * 
 * 5000 es el tiempo que tarda en ejecutar esa funcion 
 */