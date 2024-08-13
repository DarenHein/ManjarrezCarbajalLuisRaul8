// Ejercicio 1: Validar Usuario
// Escribe una función validarUsuario que tome un nombre de usuario y un callback. La función debe simular la validación del usuario:

// Si el nombre de usuario es "admin", el callback debe ser llamado con null como error y "Usuario válido" como resultado.
// Si el nombre de usuario es diferente, el callback debe ser llamado con "Error: Usuario no válido" como error.


// todo primero necesitamos el callback y la funcion 

function funcion(nombre,callback){
    let usuarioValido = "admin"
    setTimeout(() => {
        if(nombre == usuarioValido){
            callback(null,"El Usuario es Valido")
        }else {
            callback("Usuario no encontrado")
        }
    },2000)
}

function funcion2 (error,resultado){
    if(error){
        console.log(error)
    }else {
        console.log(resultado)
    }
}

// todo ahra mandamos a llamar ala funcion prionciapal 

funcion("Luis",funcion2)