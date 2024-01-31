
// primer ejericio una persona ingresa un dinero calculamos a cuenta de un mes 
// cuando crecera su dinero %2 
function calcular() {
    const porcentaje = 2; // porcentaje de la persona 
    var capital = document.getElementById("campo").value // tomamos el campo de la persona 
    var capital2 = parseInt(capital); // transfroamamos el dinerp a int 
    var formula = (capital2 * porcentaje) / 100; // hacemos la formula de la lana 
    capital2 += formula // le sumamos al dinero incial lo que le crecio  
    var final = capital2.toString() // volvemos a transformar a string 
    alert("Su capital sumando el %2 del mes queda en $" + final) // imprimimos un alert con el resultado final 
}

calcular();
