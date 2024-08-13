

// #### 2. Sintaxis Básica

// 2.1 **Variables y constantes**
// - Declara una variable y una constante en JavaScript. Explica la diferencia entre ambas.


let numero = 0 // variable local 
var numero2 = 12  // variable global 
const pi = 3.1416 // valor que no cambia 

// 2.2 **Tipos de datos**
// - Crea un objeto que contenga varios tipos de datos (números, cadenas, booleanos, null, undefined, y objetos). Muestra cómo acceder a cada tipo de dato.

let undefinido2

let objeto = {
    numero : 1,
    cadena : "hola mundo",
    booleano : true,
    nulo : null,
    undefinido : undefinido2,
    lista : [1,2,3,4],
    objeto : {
        nombre : "Luis",
        edad : 30 
    }
}

// todo ahora como accedo a cada uno se los lementos 
console.log(objeto["numero"])
console.log(objeto["cadena"])
console.log(objeto["booleano"])
console.log(objeto["nulo"])
console.log(objeto["undefinido"])
console.log(objeto["lista"])
console.log(objeto["objeto"]["nombre"])


// 2.3 **Operadores**
// - Escribe una expresión que use al menos tres operadores diferentes (aritméticos, de asignación, comparativos o lógicos) y explica qué hace cada uno.

let suma = 1+ 2 // aritemticos 
let resta = suma - 2 // asignacion le asiganmos al resta e suma menos 2 
let comparar = 1 > 2 // mandara falso 1 no es mayor a 2 
let logicos = 1 > 2 || 2 == 2 // ocuapnado el operador or donde si una respuesa es corrcta madara true 
// en etse  caso 2 si es igual a 2 pero 1 no es mayor a 2 su fiera and mandaria flase 


// #### 3. Estructuras de Control

// 3.1 **Condicionales**
// - Escribe una función que tome una edad como argumento y devuelva un mensaje indicando si la persona es menor de edad, adulto o mayor.
let edad = objeto.objeto.edad
funcion(edad)
function funcion(edad){
    if(edad >= 18){
        console.log("es mayor de edad")
    }else{
        console.log("es menor de edad ")
    }
}

// 3.2 **Bucles**
// - Crea un bucle `for` que imprima los números del 1 al 10 en la consola. Luego, haz lo mismo usando un bucle `while`.

for (let i = 0 ; i < 10 ; i++){
    console.log(i)
}



// #### 4. Funciones

// 4.1 **Declaración de funciones**
// - Define una función llamada `sumar` que tome dos parámetros y retorne su suma.

// 4.2 **Funciones anónimas y flecha**
// - Crea una función anónima que acepte dos números y retorne su multiplicación. Luego, haz lo mismo usando una función flecha.

// 4.3 **Parámetros y valores de retorno**
// - Escribe una función que tome un array de números y devuelva el número máximo. Usa la función `Math.max()`.

// #### 5. Objetos y Arrays

// 5.1 **Creación y manipulación de objetos**
// - Crea un objeto `persona` con propiedades `nombre`, `edad` y `email`. Muestra cómo acceder a cada propiedad.

// 5.2 **Creación y manipulación de arrays**
// - Crea un array de números. Usa los métodos `map`, `filter` y `reduce` para transformar el array, filtrar los números pares y calcular la suma total, respectivamente.

// ---

// ### Parte 2: Programación Orientada a Objetos (OOP)

// #### 1. Clases y Objetos

// 1.1 **Declaración de clases**
// - Define una clase `Coche` con propiedades `marca`, `modelo` y `año`. Añade un método `mostrarDetalles` que retorne una cadena con todos los detalles del coche.

// 1.2 **Constructores**
// - Modifica la clase `Coche` para que el constructor inicialice las propiedades a partir de los argumentos.

// 1.3 **Métodos y propiedades**
// - Añade un método `edad` a la clase `Coche` que calcule la edad del coche basado en el año actual.

// #### 2. Herencia

// 2.1 **Extender clases**
// - Crea una clase `Electrico` que extienda de `Coche` y añada una propiedad `autonomia` (en kilómetros). Incluye un método `mostrarDetalles` que también muestre la autonomía.

// 2.2 **Super y herencia de métodos**
// - En la clase `Electrico`, usa `super` para llamar al método `mostrarDetalles` de la clase base `Coche` y añadir la autonomía al mensaje.

// #### 3. Encapsulamiento

// 3.1 **Propiedades y métodos privados**
// - En la clase `Coche`, define una propiedad privada `#precio` y un método privado `#calcularValorReventa`. Muestra cómo acceder a estas propiedades y métodos desde dentro de la clase.

// 3.2 **Getters y setters**
// - Añade un getter y un setter para la propiedad `edad` en la clase `Coche` para que se pueda obtener y modificar de forma controlada.

// ---

// **Instrucciones:**
// - Responde a las preguntas teóricas y escribe el código para las preguntas prácticas.
// - Asegúrate de probar tu código en un entorno adecuado (VS Code, navegador o Node.js) para verificar su funcionamiento.

// ¡Buena suerte! 