// Aquí tienes un examen basado en los temas que mencionaste. Puedes responder a las preguntas y al final realizar el ejercicio práctico para evaluar tu comprensión.

// ---

// ### **Examen de JavaScript y Programación Orientada a Objetos**

// #### **Parte 1: Fundamentos de JavaScript**

// **1.1 Introducción a JavaScript**
// 1. ¿Qué es JavaScript y cuál es su principal propósito en el desarrollo web?
// 2. Describe brevemente la evolución de JavaScript desde su creación hasta hoy.
// 3. ¿Qué herramientas necesitas para configurar un entorno de desarrollo para JavaScript?

// **1.2 Sintaxis Básica**
// 4. ¿Cuál es la diferencia entre `let`, `const`, y `var` al declarar variables en JavaScript?

let variable = 2 //todo alcance local 
var variable2 = 2 // todo alcance global 
const pi = 3.1446 // todo como su nombre lo indica valor constante  

// 5. Menciona y describe al menos tres tipos de datos primitivos en JavaScript.

// int 
// float 
// String 
// bool 
// list o array 
// object

// 6. ¿Qué valor tienen las variables `null` y `undefined` en JavaScript, y en qué se diferencian?

let numero = null  // valor que le indicamos nosotros por que aun no le amndamos un valor 
let valor // indefinido se pone en automatico cunado no le asginamos nada 

// 7. Explica la diferencia entre los operadores `==` y `===` en JavaScript.

let igualdad = 2 == "2" // devovera el True 
let igualdad2 = 2 === "2" // devolevra false por que no son los mismo de tipos de datos 

// todo en conclusion si == solo verifica que los caractres sean iguales y === hasta el tipo de dato 

// 8. ¿Cómo funcionan los operadores lógicos `&&` y `||`? Da un ejemplo práctico de cada uno.

// el operador && es un and y  ambas condiciones se tiene que cumplir 
// el oiperador or || si ua condicion se cumple entonces las otra si ambas nos e cumple manda false 

// **1.3 Estructuras de Control**
// 9. Escribe un fragmento de código que utilice una estructura `if...else` para verificar si un número es positivo, negativo o cero.
let numero3 = 5
if(numero3 > 0){
    console.log("el numero es posisitvo")
} else if(numero3 == 0){
    console.log("el numero es cero")
}else {
    console.log("el numero es negativo")
}

// 10. ¿En qué casos usarías un bucle `for` en lugar de un bucle `while`? Proporciona un ejemplo para cada uno.

// el buc;le for se ocupa cunado sabes la cantidad de iteraciones que debesmo ocupar 
// e;l bucle while es cuando no sabemos la cantidad de iteraciones que se va ovupar 

// for 

for(let i =0 ; i < 10 ; i++){
    console.log(i)
}

// ejemplo con el buvcle whi;e 

let i = 0
while(i < 10){
    console.log(i)
    i++
}


// 11. ¿Cómo funciona la estructura `switch` en JavaScript? Escribe un código que la utilice para manejar diferentes casos de colores ("rojo", "verde", "azul", y un caso predeterminado).

// se menajo como casos sirve cunado solo tenemos pocas opcies en el programa 
let opcion = 3 
switch(opcion){
    case 1:
        console.log("opcion 1") 
    break

    case 2 :
        console.log("opcion 2") 
    break

    case 3 :
        console.log("opcion3 ") 
    break

    default :
        console.log("opcion no valida ")
    break
}

// **1.4 Funciones**
// 12. ¿Cómo se declara una función en JavaScript? Escribe un ejemplo sencillo.
function funcion (){
    console.log("hola mundo desde una funcion ")
}
funcion() // mandamos a llamar ala funcion 
// 13. ¿Qué son las funciones flecha (arrow functions) y cómo se diferencian de las funciones tradicionales?

// las funciones felcha son una manera minimalistaca de las cuniones tradicionales 
let a = 0 
let b = 12 

let c = (a,b) => {return a + b }
console.log(c(a,b))

// 14. Escribe una función que tome dos números como parámetros y devuelva su suma. Luego, conviértela en una función flecha.

const numerosuma = (a,b) => {return a + b}
console.log(numerosuma(1,2))


// **1.5 Objetos y Arrays**
// 15. ¿Cómo se crea un objeto en JavaScript? Proporciona un ejemplo.
// hya dos formas las pondre 
const persona = new Object()
persona.nombre = "Luis" // obj clasve valor 
persona.edad = 30 

console.log(persona)

// la otra forma 
const persona2 = {
    nombre : "kelly",
    edad : 30
}

console.log(persona2)

// 16. ¿Cómo accederías y modificarías las propiedades de un objeto?

// todo pcuapando el ejemplo dearriba 
persona.nombre = "kevin"

console.log(persona)

// 17. Explica cómo se usa el método `map` en arrays. Proporciona un ejemplo donde se multipliquen todos los elementos de un array por 2 usando `map`.


// el elemento map se ocupa para aplicar una funcion acad elemento del un array 
const array = [1,2,3,4]
const newArray = array.map(array => array * 2)
console.log(newArray)

// #### **Parte 2: Programación Orientada a Objetos (OOP)**

// **2.1 Clases y Objetos**
// 18. ¿Cómo se declara una clase en JavaScript? Proporciona un ejemplo que incluya un constructor y un método.

class Persona{
 
    constructor(nombre){
        this.nombre = nombre 
    }
    // metodo 
    saludar(){
        console.log("hola mi nombre es " , this.nombre)
    }
}


// 19. Explica la diferencia entre propiedades y métodos en una clase.

// propiedades son las caracteristicas que componen ala clase 
// los emtodos son las ccionesb que hace la calse 


// 20. ¿Cómo crearías una instancia de una clase y accederías a sus métodos?
 // hacempos la instancia del elemento 
 const personita = new Persona("Luis")
 personita.saludar()


// **2.2 Herencia**
// 21. ¿Qué es la herencia en JavaScript y cómo se implementa?

// la herencia es mas qu la forma que un clse padre herede metodos y atribus a clase hija 
// ocupare la calse ?Persona 
class hija extends Persona{
    #apellido // metodo propio de la clase hija 
    constructor(nombre , apellido){
        super(nombre)
        this.#apellido = apellido
    } 

    // hererdar el metodo 
    saludar(){
        console.log("mi nombre es " , this.nombre , "y mi apellido es " , this.#apellido)
    }

    // metodo porpio
    gustos(){
        console.log("mis gustos son ....")
    }

}

const hijita = new hija("Zelda" , "Manjarrez")
hijita.saludar()
hijita.gustos()


// 22. Explica el uso de la palabra clave `super` en el contexto de la herencia.

//las palabras super en la clase hija se oupan para poder erredar los atribusts de la calse padre 
// y inidcar cuales vamos a ocuapr 

// 23. Proporciona un ejemplo donde una clase hija extienda una clase padre, y utilice un método de la clase padre.

class hija2 extends Persona{
    #apellido // metodo propio de la clase hija 
    constructor(nombre , apellido){
        super(nombre)
        this.#apellido = apellido
    } 

    // hererdar el metodo 
    saludar(){
        console.log("mi nombre es " , this.nombre , "y mi apellido es " , this.#apellido)
    }

    // metodo porpio
    gustos(){
        console.log("mis gustos son ....")
    }

}

const hijita2 = new hija("Zelda" , "Manjarrez")
hijita2.saludar()
hijita2.gustos()


// **2.3 Encapsulamiento**
// 24. ¿Qué son las propiedades privadas en JavaScript y cómo se declaran?

// puyes senicllo es la forma de hacer que elemnto en la clase no salgan de ella 
//como se hacen hay dos formas con el simbolo _ y con el simbolo # 
// $ es del nuevo js y ya no se pueden acceder a los atribus fuera de clase 
// _ este es mas como de persona de buenos sentimientos que se dicen mira es privada nose 
//puede opuapr pero depende de nuestra etica como programdor y saber cuando ocuaprla 

class clasificado{
    #nombre 
    constructor(nombre , edad ){
        this.#nombre = nombre , 
        this._edad - edad 
    }
}

// 25. Explica la importancia de los getters y setters en la encapsulación de datos.

// estos se ocupan para poder acceder a celementos de nuetra clase y modificarlos 

// 26. Proporciona un ejemplo donde uses un getter y un setter para acceder y modificar una propiedad privada en una clase.


class prueba {
    #nombre 
    constructor(nombre){
        this.#nombre = nombre 
    }

    // clases get y set 
    get nombre(){
        return this.#nombre
    }

    set nombre(nombre){
        this.#nombre = nombre 
    }
}


// hacem,os instancia 

const obj = new prueba("Luis")
console.log(obj.nombre)
obj.nombre = "Luis"

// ---

// ### **Parte 3: Ejercicio Práctico**

// **Instrucciones:**
// Desarrolla una aplicación sencilla en JavaScript que gestione una lista de tareas pendientes (to-do list). La aplicación debe cumplir con los siguientes requisitos:

// 1. **Interfaz Básica:** Debe tener un campo de entrada de texto para añadir nuevas tareas, y un botón para agregar la tarea a la lista.
// 2. **Lista de Tareas:** Las tareas añadidas deben mostrarse en una lista. Cada tarea debe tener un botón para marcarla como completada y otro para eliminarla.
// 3. **Almacenamiento de Tareas:** Las tareas deben almacenarse en un array de objetos, donde cada objeto represente una tarea con propiedades como `id`, `nombre`, y `completada`.
// 4. **Uso de Clases y Métodos:** Implementa la lógica utilizando clases. Crea una clase `Tarea` y una clase `ListaDeTareas` para gestionar la creación, marcado como completado, y eliminación de tareas.
// 5. **Persistencia de Datos (opcional):** Almacena las tareas en el `localStorage` para que persistan al recargar la página.

// ---

// ¡Buena suerte con el examen!