// ¡Entendido! Aquí tienes un examen teórico de opción múltiple sobre Programación Orientada a Objetos (POO) en JavaScript, seguido por un examen práctico:

// ### Examen Teórico (Opción Múltiple)

// 1. **¿Qué es un objeto en JavaScript?**

//    - b) Una colección de propiedades y métodos

// 2. **¿Qué es una clase en JavaScript?**

//    - b) Una plantilla para crear objetos


// 3. **¿Qué es la herencia en JavaScript y cómo se implementa?**

//    - b) Un proceso donde una clase puede extender otra clase

// 4. **¿Cuál de los siguientes es un ejemplo de un método en una clase?**

//    - b) Una función definida dentro de una clase

// 5. **¿Qué palabra clave se utiliza para crear una instancia de una clase?**

//    - c) new


// 6. **¿Cómo se define una clase en JavaScript?**
//    - a) `class MyClass {}`

// 7. **¿Cuál es el propósito del constructor en una clase?**

//    - b) Para inicializar propiedades de un objeto


// 8. **¿Cómo se accede a una propiedad de un objeto?**
//    - a) `obj[propiedad]`

// 9. **¿Qué es el encapsulamiento en POO?**
//    - a) La práctica de esconder detalles internos y exponer solo lo necesario


// 10. **¿Qué es el polimorfismo en POO?**
//     - a) La capacidad de un objeto de tomar muchas formas


// ### Examen Práctico

// 1. **Crea una clase llamada `Persona` que tenga las propiedades `nombre` y `edad`, y un método llamado `saludar` que imprima un mensaje de saludo incluyendo el nombre de la persona.**

class Persona{
    #nombre 
    #edad

    constructor(nombre,edad){
        this.#nombre = nombre
        this.#edad = edad 
    }

    saludar(){
        console.log("hola " , this.nombre , "tu edad es de " , this.edad)
    }
}

const persona = new Persona("Luis" , 30)
persona.saludar()

// 2. **Crea una clase llamada `Estudiante` que extienda la clase `Persona`, añadiendo la propiedad `grado` y sobrescribiendo el método `saludar` para incluir el grado en el mensaje de saludo.**

class Estudiante extends Persona{
    constructor(nombre,edad,grado){
        super(nombre,edad)
        this.grado = grado
    }

    // sobresctiura de metodo 
    saludar(){
        console.log("alumnos " , this.nombre , "edad : " , this.edad , "grado : " , this.grado)
    }
}


// 3. **Crea una instancia de la clase `Estudiante` con el nombre "Juan", edad 20, y grado "Segundo año". Llama al método `saludar` de esta instancia.**

const estudiante = new Estudiante("Luis" , 12, "2A")
estudiante.saludar()

// 4. **Define una clase `Coche` con propiedades `marca`, `modelo` y `año`. Agrega un método `detalles` que imprima estos detalles. Luego, crea tres instancias de `Coche` con diferentes valores y llama al método `detalles` para cada una.**

class Coche {
    constructor(marca,modelo,año){
        this.marca = marca
        this.modelo = modelo
        this.año = año 
    }

    detalles(){
        console.log("Detalles del coche Marca : " , this.marca , "Modelo : " , this.modelo , "año " , this.año)
    }
}

// ahora hacemos 3 instancias de la tesis 

const coche = new Coche("Marca","Modelo",1992)
coche.detalles()

const coche2 = new Coche("Marca","Modelo",1992)
coche2.detalles()
// 5. **Crea una clase `CuentaBancaria` con propiedades `titular` y `saldo`. Agrega métodos `depositar` y `retirar` que modifiquen el saldo adecuadamente. Asegúrate de que no se pueda retirar más dinero del que hay en la cuenta.**

// 6. **Define una clase `Animal` con un método `hacerSonido`. Luego, crea dos clases que extiendan `Animal`: `Perro` y `Gato`, cada una con su propia implementación del método `hacerSonido`. Crea instancias de `Perro` y `Gato` y llama a sus métodos `hacerSonido`.**

// 7. **Crea una clase `Rectangulo` con propiedades `ancho` y `alto`, y un método `calcularArea` que devuelva el área del rectángulo. Luego, crea una instancia de `Rectangulo` y llama al método `calcularArea`.**

// 8. **Implementa una clase `Calculadora` con métodos `sumar`, `restar`, `multiplicar` y `dividir`. Cada método debe aceptar dos argumentos y devolver el resultado de la operación correspondiente.**

// 9. **Crea una clase `Libro` con propiedades `titulo`, `autor` y `anio`. Agrega un método `info` que imprima un resumen del libro. Luego, crea tres instancias de `Libro` y llama al método `info` para cada una.**

// 10. **Define una clase `Empleado` con propiedades `nombre` y `salario`. Agrega un método `aumentarSalario` que acepte un porcentaje y aumente el salario del empleado en ese porcentaje. Crea una instancia de `Empleado` y utiliza el método `aumentarSalario`.**

// Espero que estos ejercicios sean útiles para poner en práctica tus conocimientos sobre Programación Orientada a Objetos en JavaScript. ¡Buena suerte!