
/*
                                  ______               _
                      _________ _/ / / /_  ____ ______/ /__
                     / ___/ __ `/ / / __ \/ __ `/ ___/ //_/
                    / /__/ /_/ / / / /_/ / /_/ / /__/ ,<
                    \___/\__,_/_/_/_.___/\__,_/\___/_/|_|

LOS CALL BACK SON FUNCIONES CON ORDEN OSEA PRIMERO SE EJECUTARA UNA FUNCION DESPUES LA OTROA MARCADA 
Y TODO LO CONTROLA UNA FUNCION QUE ES LA QUE DA EL ORDEN 
*/

// VASMOA  HACER UN EJEMPLO SNECILLO 

function poniendoHervir(callback){ // le mandamos un call cka que es la funcion que ejecutara despues 
	console.log("Paso 1 poniendo hervir el agua ") 
	setTimeout(function(){ // le damos un tiempo 
		console.log("El agua esta hierviendo") // despues de hacer apsado los 3 segundos mandra a llamar ala funcion apra hasta este punto no se a creado la funcion solo sabemos que se ejecutara una nueva funcion 
		callback() // manda a llamr ala call back cunado el agua este lista 
	} , 3000)
}

// funcion apra cocinar la pasta 
// esta es la funion que ocuparemos como callback ahora hasta este pnto esta funcion solo estsa creada 
// aun no es el callback por que por que necesitamos una nueva funcion que rija el orden de los callback 
// yo podrias crear otra funcion u no la llamaria 
function cocinando(){
	console.log("cocinando ")
}

function comiendo(){
	console.log("comiendo ..")
}

// aqui empezamos el proceso de cocina en una funcion que rije las otras funciones 
function preparando(){
	poniendoHervir(function(){
		cocinando()
		comiendo()
	})
}

// funcion que rije todo 
preparando()
