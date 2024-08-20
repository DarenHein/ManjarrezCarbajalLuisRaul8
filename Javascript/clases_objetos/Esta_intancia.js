// metodos estaticos y de instancia en programcion orintada a objetos en js 

// metodo de instancia 

class Persona{
    #nombre 
    constructor(nombre){
        this.#nombre = nombre 
    }

    // metodos 
    saludar(){
        console.log("hola mi nombre es Luis")
    }

    // metodo estatico 
    static saludar2(){
        console.log("Hola mi nombre es Luis ")
    }
}

// ahora hacemos una instancia basica 

//const persona = new Persona("Luis")
// hacemos la lalmada a un metodo por intancia 
//persona.saludar() // metodo por intsncia 
// ahora que esun metodo estatico 
// es la psoibilidad de llamar a un metodo de una clase dsin la encesidad de hacer la instancai ala clase 
console.log(Persona.saludar2()) 