// Algoritmo de Luhn para validar tarjetas de crédito
// Paso 1: Voltear el número de la cadena al revés

let numero = "378282246310005";
let array = [];

for (let i = numero.length - 1; i >= 0; i--) {
    array.push(Number(numero[i]));  // Convertimos cada dígito en un número
}

// Paso 2: Multiplicar cada segundo dígito del número por 2
// Si pasa de 9, se suman sus dos dígitos

for (let i = 1; i < array.length; i += 2) {
    array[i] *= 2;
    if (array[i] > 9) {
        array[i] -= 9;  // Resta 9 para sumar los dígitos
    }
}

// Paso 3: Sumar todos los elementos del array
let resultado = array.reduce((acum, valor) => acum + valor, 0);

// Paso 4: Verificar si al dividir por 10, el resto es 0 (validez)
let resultadoFinal = (resultado % 10 === 0);

if (resultadoFinal) {
    console.log("La Tarjeta es válida");
    console.log("Tarjeta: ", numero);
} else {
    console.log("La Tarjeta no es válida");
    console.log("Tarjeta: ", numero);
}
