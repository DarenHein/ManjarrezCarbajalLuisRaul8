// agregar metodos a los objetos en js 

var Persona ={

    "Nombre" : "Luis",
    "Edad" : 30,                // estos vendrias siendo atributos 
    "OCupacion" : "Progrmador",

    saludor : function(){       // este vendira siendoe el metodo
        console.log("Hola mi nombre es " , Persona.Nombre); 
    }
}

// podemos mandar o invocar ala 
Persona.saludor()

// como los atributos que agregamos desde el "main" tambien se peuden agregar metodos 
// sin modificar la estructura del codigo 

// agregando un metodo nueco ala clase Persona 

Persona.despedir = function(){

    console.log("Me despido mi nombre es " , Persona.Nombre)

}
Persona.despedir()


