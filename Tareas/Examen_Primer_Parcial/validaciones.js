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

document.addEventListener('DOMContentLoaded' , function(){ // todo este evento hace que prjimero cargue por completo la pagina web antes de que el boton haga algo es de cajon en cada codigo nicolas 
  var boton = document.getElementById("boton")
  boton.onclick = validacion
})

// !calidacion del campo capital 
function validacion_capital(){
    var capital = document.getElementById("capital").value;
    var mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "";
  
    if (capital === "") {
      mensaje.innerHTML = "Campo vacío";
    } else {
      let verificar = isNaN(capital);
      if (verificar === true) {
        mensaje.innerHTML = "Campo no válido";
      } else {
        let capital2 = Number.parseFloat(capital);
        if (!Number.isFinite(capital2)) {
          mensaje.innerHTML = "El valor introducido no es un número decimal.";
          return;
        }
        capital2 = capital2.toFixed(2);
        if (capital2 <= 0) {
          mensaje.innerHTML = "El número debe ser mayor a 0.";
        } else if (capital2 > 10000) {
          mensaje.innerHTML = "El número debe ser menor o igual a 10000.";
        } else {
          // El número es válido.
          // Aquí puedes agregar código para procesar el número válido.
        }
      }
    }
  }
// ahora aremos el evento en el de menu ya para empezar la rtabla 
document.addEventListener('DOMContentLoaded' ,function(){
  var boton = document.getElementById("boton")
  boton.onclick= validacion_capital
})

  