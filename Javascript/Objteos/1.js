
// ### Ejercicio 1: Crear un objeto literal
// Crea un objeto `coche` con las propiedades `marca`, `modelo`, y `año`. Luego, imprime cada propiedad en la consola.

// ### Ejercicio 2: Añadir un método a un objeto
// Agrega un método `informar` al objeto `coche` que imprima una cadena con la información del coche en el formato "Marca: [marca], Modelo: [modelo], Año: [año]".

const coche = {
    marca : "marca",
    modelo : "modelo",
    año : 1999,

    informar : function() {
        console.log("marca " , this.marca)
        console.log("modelo" , this.modelo)
        console.log("año" , this.año)
    }
}

coche.informar()

const carro = new Object()
carro.marca = "marca"
carro.modelo = "modelo"
carro.año = 1999
carro.infromar = function(){
    console.log(carro.marca)
}

