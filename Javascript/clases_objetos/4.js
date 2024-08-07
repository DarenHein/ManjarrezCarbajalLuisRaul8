// encapsulamiento 

// sirve pera que lso atributos y metodos qu sean provados solo se peudan ouapar dentro de la clase 

// atributos privados 
// estos solo sirvendentro de la clase no se pueden llamar fuera de alla 

class Persona{

    #nombre 

    constructor(nombre){
        this.#nombre = nombre
    }

    saludar(){
        console.log("hola mi nombre es " , this.#nombre)
    }
}

// ahora hacemos intancia del objeto y comprobamos que no se pueda acceder al atributoo 
const persona = new Persona("Luis")
console.log(persona.#nombre) // desde la terminal esta marcando un error jajajajaj 