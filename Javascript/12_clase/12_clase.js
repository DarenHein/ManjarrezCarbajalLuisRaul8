
// ambito scope 
// es las reglas de las variables ya sea local o global 

let variable_global = "Soy global"

function funcion(){
    let variable = "soy local"
    console.log(variable_global)
}

console.log(variable) // esto amrcara una error en el codigo 
console.log(variable_global) // nos permite acceder a ella 

// las variables globales podemos acceder a aellas desde donde sea en pocas palbras son unas facilotas 
// ls variables locales son las esposas fieles (pinches analogias bien vergas)