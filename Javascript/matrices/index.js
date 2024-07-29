
// vamos  hacer un matriz con js
// conjunto de datos multidimencionales 

const matriz = [

	[1,2,3,4],
	[5,6,7,8],
	[9,10,11,12]
]

// esto es una amtriz multidimencional ahora vmaos a accedera aalgunos de los elemtnos de ella 


console.log(matriz[0][1]) // accedemos ala primera fila posicion 1 => 2

// ahroa actualizar algun dato de la amtriz 

matriz[0][1] = 10 // ahroa ya no valdra 2 si no 10 fila 1 columna 2 

// agregar otra fila ala matriz
const filanew = [12,23,2]
matriz.push(filanew)

//console.log(matriz)

// ahora iterar en una matriz si lo hacemos de la forma rtadicional solo itera dentro osea
// imprimi toda las filas y lo que queremos es que sea elemnto por elemento 
//
for(let i = 0 ; i < matriz.length ; i++){
	//console.log(matriz[i])
	for(let elementos of matriz[i]){
		console.log(elementos)
	}
}




