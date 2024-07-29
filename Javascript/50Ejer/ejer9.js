// 9. Implementa una función que reciba un string y lo retorne en reversa.

function cadena(palabra){
    let cadenareversa = []
    let longitd = palabra.length
    for (let i = longitd -1  ; i >= 0 ; i--){
        cadenareversa.push(palabra[i])
        // console.log(palabra[i])
    }

    // console.log(cadenareversa)
    let nuevaPalabra = ""
    for (let elementos of cadenareversa){
        nuevaPalabra = nuevaPalabra + elementos
    }
    console.log("cadena original -> " , palabra)
    console.log("cadena Volteada -> ", nuevaPalabra)
}

let cadena2 = "pelas"
cadena(cadena2) 