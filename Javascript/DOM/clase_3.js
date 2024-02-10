
// vamos a llenar un campo de la tabla desde js 

function funcion(){
    // todo resumen 
    var obtener = document.getElementById("nombre").value // todo tammamos lo que se encuentra ene l campo y lo almacena 
    let nuevo_nombre = obtener // ese mismo dato lo mandamos a una nueva variable 
    var nombre = document.querySelector("h1") ocupamos el query selector para seleccionar la etiqueta h1 en html 
    nombre.textContent = "hola " + nuevo_nombre // y al presionar el boton mandar un saludo con el nombre 
}