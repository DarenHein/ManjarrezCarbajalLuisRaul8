
// todo funciones anonimas en js 

var nombre = function() {
    console.log("hola mundo")
}

nombre()

let numero = function(numero, numero2) {
    return numero + numero2
}

console.log(numero(1,2))


// todo funciones flecha en js 

const numero2 = (a,b) => a + b 

console.log(numero2(3,2))

// otro tipo de funciones flecha en js 

const numero3 = (a,b) => {
     return a + b 
}

console.log(numero3(12,2))