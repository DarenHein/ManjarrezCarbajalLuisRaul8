    // todo mandejo de aerroes con js en callback 
    // todo que es un callback es una funcion que recibe una funcion peimreo esta funcion se ejcuta y al terminar ejecuta la siguinte 


    // todo manejo de erroes con callback 

    // todo el primer parametro esta dado apra el error y el segundo aprametro apra el exito 

    function funcion(nombre,callback){
        let archivo = "hola.pdf"
        setTimeout(() => {
            if(nombre == archivo){
                callback(null,"Archivo encontrado")
            }else {
                callback("Archivo no encontrado ")
            }
        },2000)
    }

    function funcion2(error,resultado){
        if(error){
            console.log(error)
        }else {
            console.log(resultado)
        }
    }

    funcion("hola.pdf",funcion2)