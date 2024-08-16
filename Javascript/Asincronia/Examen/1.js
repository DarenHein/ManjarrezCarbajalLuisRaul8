// Aquí tienes un examen general de JavaScript que abarca desde lo básico hasta conceptos avanzados como `async/await`. El examen está dividido en secciones, y cada una contiene preguntas teóricas y ejercicios prácticos.

// ---

// ### **Sección 1: Fundamentos de JavaScript**

// 1. **Pregunta Teórica**: 
//    ¿Cuál es la diferencia entre `var`, `let`, y `const` en JavaScript?

    /**
     * !var es una variable de alcance global 
     * * let es mas de alcance por modulo 
     * todo const es un variable constante valores que nunca cambian 
     */

// 2. **Ejercicio Práctico**:
//    Escribe una función llamada `saludar` que reciba un nombre como argumento y devuelva un saludo en la consola. Usa `let` para declarar la variable que almacena el mensaje de saludo.

//    ```javascript
//    // Escribe tu código aquí
//    ```

function funcion (name){
    let mensaje = "hi " + name 
    return mensaje
}

let saludo = funcion("Luis")
console.log(saludo)


// ### **Sección 2: Estructuras de Control**

// 1. **Pregunta Teórica**: 
//    Explica cómo funcionan las sentencias `if`, `else if`, y `else` en JavaScript.

/**
 * si la condicion es true entra en if pero pdue haber una segunda condicion que si no se cumple la primera entraria en el esle if 
 * y en dado caso que ni una se averdadera por default entra en else 
 */

// 2. **Ejercicio Práctico**:
//    Escribe una función llamada `esPar` que reciba un número y devuelva `true` si es par y `false` si es impar. Usa una estructura `if-else` para hacer la evaluación.

const numero = (a) => a % 2 == 0
numero(2)
if(numero){
    console.log("El numero es par")
}else {
    console.log("el numero es inpa ")
}

//    ```javascript
//    // Escribe tu código aquí
//    ```

// ### **Sección 3: Funciones y Alcance (Scope)**

// 1. **Pregunta Teórica**: 
//    ¿Qué es una función de flecha en JavaScript? ¿En qué se diferencia de una función tradicional?

/**
 * las funciones fleca son micro funciones que son mas rapidas de ejecutar ys e almacenan en uan varuable 
 * las funciones normales son mas utiles en bloques grandes de codigo 
 */

// 2. **Ejercicio Práctico**:
//    Convierte la siguiente función tradicional en una función de flecha:

//    ```javascript
//    function sumar(a, b) {
//        return a + b;
//    }

//    // Convierte la función aquí
const suma = (a,b) => a+b
console.log(suma(2,1)) 
//    ```

// ### **Sección 4: Arrays y Objetos**

// 1. **Pregunta Teórica**: 
//    ¿Cómo puedes agregar un elemento al final de un array y cómo eliminar el último elemento de un array?

/**
 * si se peude eleiminaragfregar elemnto al ultimo puesto de una arrar 
 * 
 */
let array = [1,2]
array.push(3)
console.log(array) // aregando elemnto al ultimo puesto del arraya 
array.pop(3)
console.log(array) // eliminando el ultimo elemento del array 


// 2. **Ejercicio Práctico**:
//    Crea un objeto llamado `persona` con las propiedades `nombre`, `edad`, y `ocupación`. Luego, escribe una función que reciba un array de personas y devuelva el nombre de la persona más joven.

let peronas = [
    {
        nombre : "Luis",
        edad : 30,
        ocupacion : "Programador " 

    },
    {
        nombre : "Kellyu",
        edad : 29 , 
        ocupacion : "ABogado"
    },
    {
        nombre : "Kevin",
        edad : 22 , 
        ocupacion : "pendejo"
    }
]
// hay una funcion que devulev el minimo de una lista que es math.min 
// creo que aremos uso de varios metodos array 
const edades = peronas.map(peronas => peronas.edad) // recoje todas las edades de los objetos 
console.log(edades) // mostradod todas las dedad del obj 
// ahroa aremos un metodo math.min para scar la minima 
const min = Math.min(...edades) // edad min 
const  max = Math.max(...edades) // edad maxima 
console.log(min)
console.log(max)
//    ```javascript
//    // Escribe tu código aquí
//    ```

// ### **Sección 5: Programación Orientada a Objetos**

// 1. **Pregunta Teórica**: 
//    Explica qué es un prototipo en JavaScript y cómo funciona la herencia prototípica.

// 2. **Ejercicio Práctico**:
//    Crea una clase `Animal` con un constructor que reciba `nombre` y `sonido`. Luego, crea una clase `Perro` que herede de `Animal` y agrega un método `ladrar` que imprima el sonido del perro en la consola.

class Animal{
    constructor(raza,pelaje){
        this.raza = raza 
        this.pelaje = pelaje 
    }

    sonido(){
        console.log("hace sonido")
    }
}

class Perro extends Animal{
    constructor(raza,pelaje,tamaño){
        super(raza,pelaje)
        this.tamaño = tamaño
    }

    sonido(){
        console.log("raza " , this.raza)
        console.log("Pelaje color " , this.pelaje)
        console.log("ta maño del perror -> " , this.tamaño)
        console.log("Los perros hacen gua gua ")
    }
}
// hacemos la intancia del obj 
const perro = new Perro("callejero" , "cafe" , "chico")
perro.sonido()
//    ```javascript
//    // Escribe tu código aquí
//    ```

// ### **Sección 6: Asincronía con Promesas y `async/await`**

// 1. **Pregunta Teórica**: 
//    ¿Cuál es la diferencia entre una promesa y `async/await` en JavaScript?

/**
 * las prmesas como su nombre lo indica son promesas en codigo si un evento susece pasao alo si falla pasa algo diferente para tratar ese error 
 * 
 * los async await es una fomra de promarsas o de programcion asincrona que trata que el codigo sea ma paso a paso como la prorgmacion sincrona es mejor ya que le codigo e smas limpio a compracion de los callback que pueden producir callback hell 
 */

// 2. **Ejercicio Práctico 1**:
//    Escribe una función `fetchData` que use `fetch` para obtener datos de una API pública (como `https://jsonplaceholder.typicode.com/posts`). Usa `async/await` para manejar la solicitud y maneja cualquier posible error.

// ok necesitamos dos funciones unas que mande y otra que haga la asion ambas deben de aser async 

// funcion que hace la peticion de la api 
async function fetchData() {

    const url = "https://jsonplaceholder.typicode.com/posts"
    console.log("Es eprando que la api responsa ....") 
    await new Promise(resolve => setTimeout(resolve,1000))
    const response = await fetch(url)
    if(!response.ok){
        console.log("No s epudo conectar la abse a la api ")
    }   
    // ahora tranformoas los datos 
    let data = await response.json()
    return data 
}

async function funcion(){
    try {
        const mensaje = await fetchData()
        console.log(mensaje)
    } catch (error) {
        console.log(error)        
    }
}
funcion()
//    ```javascript
//    // Escribe tu código aquí
//    ```

// 3. **Ejercicio Práctico 2**:
//    Crea una función `postData` que envíe datos a la misma API (usa el endpoint para `POST`) y maneja la respuesta. Asegúrate de configurar correctamente los encabezados para enviar JSON.

//    ```javascript
//    // Escribe tu código aquí
//    ```

// ---

// Este examen abarca una amplia gama de temas y te permitirá practicar tanto conceptos básicos como avanzados de JavaScript. ¡Buena suerte!