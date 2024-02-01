

// aqui mete los 10 algoritmos en funciones cada uno 

function Ejericio1() {
    const porcentaje = 2; // porcentaje de la persona 
    var capital = document.getElementById("dinero").value // tomamos el campo de la persona 
    if (capital == "") {
        alert("campo vacio") // por si el usuario ingresa un campo vacio 
    }
    else {
        var verificar = isNaN(capital)
        if (verificar == true) {
            // es cadena 
            alert("ingresa solamente numeros ")
        } else {
            // es numero 
            var capital2 = parseFloat(capital); // transfroamamos el dinerp a int 
            if (capital2 <= 0) {
                alert("Porfacor ingresa un numero mayor a 0 ")
            } else {
                var formula = (capital2 * porcentaje) / 100; // hacemos la formula de la lana 
                capital2 += formula // le sumamos al dinero incial lo que le crecio  
                var final = capital2.toString() // volvemos a transformar a string 
                alert("Su capital sumando el %2 del mes queda en $" + final) // imprimimos un alert con el resultado final 
            }
        }

    }
}

function tarea2() {
    var sueldo = 1000;
    var ventas = document.getElementById("dinero").value;
    var veri = isNaN(ventas);

    if (ventas === "") {
        alert("Campo vacío");
    } else {
        if (veri) {
            alert("Cadena");
        } else {
            var ventasEntero = parseInt(ventas);

            if (ventasEntero !== parseFloat(ventas)) {
                alert("Por favor, ingresa solo números enteros.");
            } else {
                if (ventasEntero <= 0) {
                    alert("Error");
                } else {
                    // ahora sacaremos el porcentaje de una venta 
                    var porcentaje = 10; // Corregido: no se usa "int" en JavaScript
                    var resultado = (sueldo * porcentaje) / 100;
                    resultado = resultado * ventasEntero; // Corregido: utiliza ventasEntero en lugar de ventas
                    sueldo = sueldo + resultado;
                    var final = sueldo.toString(); // Corregido: utiliza toString() en lugar de to toString()
                    alert("El sueldo con las comisiones queda en $" + final); // Corregido: mensaje de alert corregido
                }
            }
        }
    }
}
