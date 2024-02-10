// aqui van todas las validaciones en orden
function validacion() {
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
        alert("Todo bien ");
    } else {
    }
}
