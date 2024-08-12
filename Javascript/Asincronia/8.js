// todo manejo de errores en callback 


function funcion(nombre , callback){
        // ahora tenemos el mensaje y el callback 
        setTimeout(() => {
            if(nombre == "hola.pdf"){
                // quiere decir que esa bien el nombre dela rchivo simulado 
                callback( null , "libro encontrado ")
            }else {
                callback("Libro no encontrado ")
            }
        }, 2000)
}

function funcion2(error , mensaje){

    if(error){
        console.log("error :",error)
    }else {
        console.log("mensaje :" , mensaje )
    }

}

funcion("hol.pdf",funcion2)