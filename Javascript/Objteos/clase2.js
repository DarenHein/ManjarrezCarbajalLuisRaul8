
// hay otras fromas de dar un objto 

const objeto = new Object(); // todo aca decalramos el objeto 
objeto.name = "Luis" // todo llave name valor Luis 
objeto.edad = 30 ; 
console.log(objeto) // todo imprima -> objeto{name : "Luis" , edad : 30}
// todo tambien podemos imrpimr por separado pero aca no es por indice 
console.log(objeto.name) // todo imprime Luis

// ahroa metodos con los que podemos jugar con los objetos 
// todo agregar una nueva llave valor 
objeto.peso = 12.3;
console.log(objeto)
// todo ahora como elimino un nuevo objeto 
// todo ocupamos el metodo delate 
delete objeto["peso"];
console.log(objeto)

// ahroa aactualizar un valor de una llave 
// ahroa para sacarlas llaves 
var llaves = Object.keys(objeto); 
// todo ahroa los valores 
var valores = Object.values(objeto)
console.log(llaves) 
console.log(valores)

// ahora tambien pude haber metodos como el poo en js 

const objeto2 = {
    nombre : "Luis",
    saludar : function(){
        console.log("hola mi nombre es" , this.nombre)
    }
}

objeto2.saludar()

// ahroa de la otra forma 
const objeto3 = new Object()

objeto3.saludar = function(){
    console.log("hola mundo")
}
objeto3.saludar()



