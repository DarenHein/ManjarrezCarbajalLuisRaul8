// 8. Escribe una función que reciba un string y retorne el número de vocales que contiene.

function cadena(cadena){
    let bocales = ["a","e","i","o","u"];
    let cantidad =  []

    for (let i = 0 ; i < cadena.length ; i++){
        if(bocales.includes(cadena[i])){
            cantidad.push(cadena[i])
        }
    }
   
    console.log(cantidad.length)
    console.log(cantidad)
    
}

let cadena2 = "hola mundo desde un texto o un programa en python "
let sinespacios = cadena2.replace(/\s+/g, '');
//console.log(sinespacios)
cadena(sinespacios)