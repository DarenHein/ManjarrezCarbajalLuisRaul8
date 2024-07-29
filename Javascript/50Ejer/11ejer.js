// 11. Escribe una función que verifique si un string es un palíndromo.

// un palindromo es como se escriba una palabra delante por detras se lee de la misma manera
//

function palindromo(palabra){
	console.log("palbra original -> " , palabra)
	// pue es simplre solamente vamos a voltear la cadena original y comparamos 
	let palabrareversa = []
	for (let i = palabra.length -1  ; i >= 0 ; i--)[
		palabrareversa.push(palabra[i])
	]

	//console.log(palabrareversa)
	let reversa = ""
	for (let elementos of palabrareversa){
		reversa = reversa + elementos
	}

	if(palabra == reversa){
		console.log("la palabra es un palindromo")
	}else{
		console.log("la palbra no es un palindromo")
	}
	console.log("palbra volteada" , reversa) 

    
}

palindromo("oso")
