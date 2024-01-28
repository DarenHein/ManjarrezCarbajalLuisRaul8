// encontrar letras repetidas en una cadena 


function contar(){
    let contador = 0
    const letra = "a" // vamos c abuscr cunatas veces se encuentra esta letra en una cadena
    let cadena = "Hola mundo desde mi laptop"
    for (let i = 0 ; i <= cadena.length ; i++){
        if(cadena[i] == letra){
            contador+=1
        }
    }
    console.log("La cadena : " , cadena , "contiene " , contador , "repetidos")
}

contar()




