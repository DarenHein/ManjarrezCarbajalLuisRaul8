 /*
  *en js existen algo que se llaman arreglos o arrys esos arrays son listas que seria python
  *	pero pero no sabia que tambien se peude tener un array de funciones y lo quiero probar 
  *
  *
  *
  *
  * */

function funcion1(){
	console.log("hola mundo");
}
function funcion2(){
	console.log("adios mundo"); 
}

// ahora se viene el arreglo de funciones 

const arregloFunciones = [
	funcion1,
	funcion2
]
// ahora para mandarlas a llamar 

arregloFunciones[0](); // mandamos a llamr al array en la posicion 9 y a us vez agregamos () para llmar ala funcion

