// 
// algoritmo de luhn 
// este se ocupa apra validar las tarjetade de credito 
// fue creado por peter luhn en 1958 en el IBM 
//
//
//
// paso 1 voltear el numero de la cadena alreves 

let numero = "3566002020360505"
let array = []
for (let i = numero.length - 1  ; i >= 0 ; i--){
	array.push(numero[i])
}
console.log(array.length)
 // ahora juntamos ese nuevo array en una cadena 
let cadena = array.reduce((acum,array) => acum + array , "")

// console.log("variable cadena = " , cadena )

for (let i = 0 ; i < array.length ; i++){
	array[i] = Number(array[i])
}
// paso dos multiplicar el segundo digito de el numero por 2 si pasa el numero de 9 se suman 
// sus dos digitos 
//

for (let i = 1 ; i < array.length ; i+=2 ){
	array[i] *= 2
	if(array[i] > 9){
		let array2 = []
		let cadena2 = array[i].toString()
		for (let j = 0 ; j < cadena2.length ; j++){
			let numeroint = Number(cadena2[j])
			array2.push(numeroint)
		}
		let suma = array2.reduce((acum,array) => acum + array , 0)
		array[i] = suma 
	}

}

// ahroa pasamos al siguiente paso que es sumar todos los elemntos del array 
// ocupare un reduce para que todo quede en una sola vriable 

let resultado = array.reduce((acum,array) => acum + array , 0)

// resultadop ya tiene el resultado final 
//

// aahora el cuarto paso si al dividirlo entr 10 el resultado es cero el es una tarjeta valida 
//

let resultadoFinal = (resultado % 10 == 0)

if(resultadoFinal){
	console.log("La Tarjeta es valida ")
	console.log("Tarjeta : " , numero)
}else{
	console.log("La Tarjeta no es Valida")
	console.log("Tarjeta : " , numero)
}


