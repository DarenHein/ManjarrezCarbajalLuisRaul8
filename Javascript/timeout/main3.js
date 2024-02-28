

// mi implementacion de set interval 

let contador =  0 // necesitamos una variable contadora 

function saludar(){// funcion 

    console.log("hola mundo" , contador)
    contador++

    // ahora con un if cuando el contador llegue a  un numero deseado se dentrnda 

    if (contador > 10){
        // detendremos el inrvalo de repeticiones 

        clearInterval(intervalo)
    }

}

const intervalo = setInterval(saludar,2000)