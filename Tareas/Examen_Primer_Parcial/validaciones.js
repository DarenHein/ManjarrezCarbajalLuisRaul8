// aqui van todas las validaciones en orden
// todo validacion menu 
function validacion() {
    let user = "Luis"
    let pass2 = "1234"
    var nombre = document.getElementById("nombre").value;
    var contra = document.getElementById("passw").value;
    var mensaje1 = document.getElementById("mensajeError");
    var mensaje2 = document.getElementById("mensajeError2");
    mensaje1.innerHTML=""
    mensaje2.innerHTML=""
    let acum = 0;
    var arreglo = [nombre, contra];
    var arreglo2 = [mensaje1, mensaje2];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] == "") {
            arreglo2[i].innerHTML= "campo faltante"
        } else {
            acum += 1;
        }
    }
    if (acum == arreglo.length) {
        if (nombre == user && contra == pass2 ){
            window.location.href = "Menu.html" 
        }else{
            alert("contraseña incorrecta ")
        }
    } else {
    }
}

// !calidacion del campo capital 
function validacion_capital(){
// agregarvalidacion por campo vacio y agregar span de que amrque el campo 
    var capital = document.getElementById("capital").value
    var mensaje = document.getElementById("mensaje")
    mensaje.innerHTML=""
    // primero verificamos que tenga algo la variable 
    if (capital ==""){
        mensaje.innerHTML="campo vacio"
    }else {
        // osea nico que tiene un dato 
        let verificar = isNaN(capital) // lo ocupamos para saber si es numero o letra 
        // true cadena 
        // false numero 
        if (verificar == true){
            // es una cadena 
            mensaje.innerHTML= "campo no valido"
        }else {
            // entonces quire decir que es un numero nico 
            // ahora pondremos que numeros 0 o negativos no se puede 
            let capital2 = parseFloat(capital)
            if (capital2 <= 0 ){
                mensaje.innerHTML = "El numero es menor a 0 o igual "
            }else{
                // aqui va cuando el numero esta bien 
            }
        }
    }

}
