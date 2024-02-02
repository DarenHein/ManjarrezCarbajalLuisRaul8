

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
                if (ventasEntero <= 0 || ventasEntero >= 10) {
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


function tarea3() {
    let producto1 = 100.0
    let producto2 = 200.0
    const descuento = 15

    var elemento = document.getElementById("producto1").value
    var elemento2 = document.getElementById("producto2").value

    var elementoFloat = parseFloat(elemento)
    var elementoFloat2 = parseFloat(elemento2)

    console.log(elementoFloat)
    console.log(elementoFloat2)

    // sumamos las cantidades 
    let compra = producto1 * elementoFloat
    let compra2 = producto2 * elementoFloat2
    let suma = compra + compra2
    if (suma == 0) {
        alert("no hay ninguna cantidad de prenda esojida")
    } else {
        let compra_descuento = (descuento / 100) * suma;
        suma = suma - compra_descuento
        suma2 = String(suma)
        alert("comrpa con descuento %15 queda en $" + suma2)
    }
}
