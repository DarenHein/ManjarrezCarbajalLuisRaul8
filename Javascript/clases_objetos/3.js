// herencia en jsvascript 

// la herencia e que una clase pueda hija puede herredar los atributos y los emtodos de la clase padre 

class Persona{
    constructor(nombre,edad){
        this,nombre = nombre , 
        this.edad = edad 
    }

    saludar(){
        console.log("hola este es un metodo de la clase padre ")
    }
}

// ahora vamos a que padre herede a clase hija

class Hija extends Persona{
    // en este caso se copua super con nombre y peso por que son atributos HERERDADOS 
    constructor(nombre,edad,peso){
        super(nombre,edad),
        this.peso = peso 
    }

    saluda2(){
        console.log("hola mundo desde la calse Hija")
    }

}

// ahroa vamos a instanciar lso objetos de las dos clases 

const hijo = new Hija("luis",30,80.1)
hijo.saludar() // metodo padre 
hijo.saluda2() // metodo de la clase hija 