class Persona {

    //todo el constructor es que inicia las variables o atributos 
    constructor(nombre, edad) { // todo manjea dos variables 
        this.nombre = nombre; // atributo nombre 
        this.edad = edad; // atributo edad 
    }

    saludar() { // un metodo o accion que hace la clase 
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
    }
}

// a esto s ele llama instanciar un objeto se crea una variable que se le mandan como parametros  dos datos en este caso nombre y edad y se crea el objto persona1 que contiene Luis y edad 30 ahroa el metodo www
const persona1 = new Persona('Luis', 30); 
const persona2 = new Persona('Ana', 25);

// Llamar al método saludar en cada instancia
persona1.saludar(); // Hola, mi nombre es Luis y tengo 30 años.
persona2.saludar(); // Hola, mi nombre es Ana y tengo 25 años.
