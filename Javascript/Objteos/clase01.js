
// objetos en js 
/**
 * son conjuntos de datos clave valor 
 * 
 */

const objeto = {
    "nombre" : "luis",
    "Apellido" : "Manjarres"
}

// ahroa vamos a imprimir todo el conjunto 

console.log(objeto)

// ahroa imprimirmos solo las llaves 

console.log(Object.keys(objeto))

// ahroa solo los valores 

console.log(Object.values(objeto))

// ahora una funcion dentro del objeto 
const objeto2 = {
    "nombre" : "Luis" , 
    "Edad" : 22,

    saluda : function(){
        console.log("hola mi nombre es " , this.nombre)
    }
}

// ahora accedemos al metodo

objeto2.saluda()