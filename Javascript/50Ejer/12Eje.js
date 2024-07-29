//ejericio 12 funcion que tome un array y ese arrary lo multplique por 2 en un nuevo array 

const newfunction = function(array){
	const array2 = []
	for (elementos of array){
		array2.push(elementos * 2)
	}

	return array2; 
}

const array = [1,2,3]

console.log(newfunction(array))
