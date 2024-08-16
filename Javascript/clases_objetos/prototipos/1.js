// herencia de prototipo 
// en inteet te lo pondran la mamada y media de que bus etc etc 
// es simplemente herencia entre diccionarios para lso de python o objetos apra los de js 
//d el obj padre le hereda todo al obj hijo asi de sencillo 
//


const padre = {
	saludo : function(){
	console.log("hola mundo")
  }
}

// ahroa la clase q herede todo de la clase hija 

const hijo = Object.create(padre)

hijo.saludo()
hijo.saludonuevo = function(){
	console.log("hola mundo desde un saludo propio de lac asle hijo ")
}

hijo.saludonuevo()
