

// clase operdores 

// operadores aritmeticos 
let numero = 4 
let numero2 = 4 

let resultado = numero + numero2 // suma 
let resultado2 = numero - numero2 // resta 
let resultado3 = numero * numero2 // multiplicacion 
let resultado4 = numero / numero2 // divicion 
let resultado5 = numero % numero2 // modulo 
let resultado6 = numero++ // incremento 
let resultado7 = numero-- //decremento 

// operadores asigncion 

numero += numero2
numero -= numero2
numero *= numero2
numero /= numero2
numero %= numero2 

// operdores de compracion 

console.log(numero == numero2) // verifica si el valor es igual 
console.log(numero === numero2 ) // verifica si el valor y el tipo de dato son iguales 
console.log(numero != numero2) // verifica si los valores no son iguales 
console.log(numero !== numero2) // verifica si el valor y tipo no son iguales 
console.log(numero < numero2 )
console.log(numero > numero2)
console.log(numero<= numero2)
console.log(numero >= numero2)
console.log(numero <= numero2)

// operadores logicos 
console.log(numero && numero < 10) // operador y 
console.log(numero || numero2 < 19) // operador 0 
console.log(!numero == numero2) // negacion 

// saber que tipo de dato es devolviendolo en una cadena 
console.log(typeof(numero)) // devolvera un number 