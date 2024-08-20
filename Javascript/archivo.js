console.log(typeof NaN); // number
console.log("5" - 2); // 3 osea resta 
console.log("5" + 2); // 52 suma de cadenas 

/**
 * el "5" + 2 cunado en una operacion de suma y un caracter sea string 
 * en automatico js tranfroma el numero en strin y hace una concatenacion 
 * 
 * en el segundo cunado no sea la operacion suma y se acualuier otro simbolo como *-/ js piens que es una oepracion matematica ys is e encunetra un string sera tranfromaco en automatico en String 
 * 
 * 
 * el nan erctifica que un dato sera number pero ea su ves el nan es un number 
 */

// (5 pts) ¿Qué son las clases en JavaScript? Define una clase llamada Animal con las propiedades nombre y tipo, y un método describir que devuelva una cadena describiendo al animal.

class Animal{
    #nombre 
    #tipo
    
    constructor(nombre , tipo){
        this.#nombre = nombre 
        this.#tipo = tipo 
    }

    sonido(){
        console.log("Nombre " , this.#nombre, "tipo " , this.#tipo)
    }
}

const animal = new Animal("Kevin", "Callejero")
animal.sonido()


// (5 pts) ¿Cómo se hereda una clase en JavaScript? Crea una clase Perro que herede de Animal e incluya un método adicional llamado ladrar que imprima "¡Guau!".

class Perro extends Animal{
    #pelaje 
    constructor(nombre , tipo , pelaje){
        super(nombre,tipo)
        this.#pelaje = pelaje
    }

    // haceos sobreescritura de metodos con Animal 
    sonido(){
        console.log("sobrescribiendo el metodo")
    }

    ladrar(){
        console.log("metodo propio ")
    }
}

// hacemos instancia del perro 
const perro = new Perro("Kevin","callejero","guero")
perro.sonido() // metodo sobrescito 
perro.ladrar() // metodo porpio 
// (5 pts) Explica la diferencia entre los métodos estáticos y los métodos de instancia. Proporciona un ejemplo de cada uno.



// (5 pts) ¿Qué es un getter y un setter en JavaScript? Crea una clase Rectangulo con propiedades ancho y alto, y utiliza getters y setters para calcular el área del rectángulo.

// getter para acceder a atribustos o verlos desde feura de clase 
// setter para modificar lso elementos de la clase afuera de alla 

class Persona{
    #nombre 
    constructor(nombre){
        this.#nombre = nombre
    }

    presentar(){
        console.log("hola mundo")
    }

    // getter 
    getnombre(){
        return this.#nombre
    }

    // setter 
    setnombre(nombre2){
        this.nombre = nombre2
    }
}

// ahora hacemos instancai de alc clase 

const persona = new Persona("Luis")

console.log(persona.getnombre())

persona.setnombre("Kelly")

console.log(persona.getnombre())