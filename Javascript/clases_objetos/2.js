// todo ahroa me toca a mi practicar con las clases y metodos en js 

// todo pequeña definicion de clase 
// plantilla de un objeto en la cidea real 
// atributos caracteristicas de una clase 
// metodos acciones de una clase 


// todo clase 
class Persona{
    // todo atributos de la clase 
    constructor(nombre,edad){
        this.nombre = nombre , 
        this.edad = edad
    }

    // metodos 
    saludar(){
        console.log("Hola mi nombre es " , this.nombre , " mi edad es de " , this.edad )
    }

}

// ahora vamos a instancias los ojetos 
const persona = new Persona("Luis",30)
// hacemos el uso de el metodo 
persona.saludar()