// manejo de finally en promesas 

function funcion(numero){
    return new Promise((resolve,reject) => {
        if(numero == 1 ){
            resolve("numero es igual a 1 ")
        }else {
            reject("numero no es igual a 1 ")
        }
    })
}

funcion(1)
    .then(mensaje => {
        console.log(mensaje)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        console.log("Esto simpre pasara no importa si es error o mensaje ")
    })

    /**
     * finally esto simpre pasara no importa lo que alla pasdao en el coidog o en la promesa 
     */