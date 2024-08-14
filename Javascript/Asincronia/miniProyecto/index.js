document.addEventListener('DOMContentLoaded', function () {
    // primero tomamos los datos de los campos de textop 
    var boton = document.getElementById('boton')
    boton.addEventListener('click', function () {

        let name = document.getElementById('nombre').value
        let contraseña = document.getElementById('pass').value

        // console.log(name)
        // console.log(contraseña)

        // bueno a este punto ya tenemos lo que manda el usuario ahora yo digo que romeiro los hagamos objetos y los amndemos como paquetes 

        let persona = new Object()
        persona.nombre = name 
        persona.password = contraseña

        validacionName(persona.nombre,funcion1)
        validarContraseña(persona.password,funcion2)


    })
})

function validacionName(objeto,callback){
    // 
    // todo primero necesitamos una array de nombres que podrian ser 

    let personitas = ["Kellys","keivn","Axel","cristian","jorge"]
    console.log("Esperando si tiene cuneta espere ")
    setTimeout(() => {
        if(personitas.includes(objeto)){
            callback("El usuario ya Existe en la base de datos :P")
        }else {
            callback(null,"Agregado con exito :D ")
        }
    },2000)
    
}

function validarContraseña(objeto,callback){

    // objto == password 
    console.log("Vamos a verificar tu contraseña ...")
    setTimeout(() => {
        if(objeto.length > 10 || objeto.length < 5){
            callback("La contraseña no cumple los requerimientos")
        }else {
            callback(null,"Contraseña aceptda ")
        }
    },2000)

}

function funcion1(error,respuesta){

    if(error){
        console.log(error)
    }else {
        console.log(respuesta)
    }

}

function funcion2(error,respuestA){
    if(error){
        console.log(error)
    }else {
        console.log(respuesta)
    }
}