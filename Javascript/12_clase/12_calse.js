

// variables globales y locales 

let variable_global = "soy global" // podemos acceder a ella desde cualquioer paere del codigo 

function funcion(){
    let local = "soy local " // podemos acceder a ellas desde la funcion o blo de codigo que sean creadas 
    console.log(variable_global) // accediendo a ella desde una funcion 
    console.log(local)
}

console.log(variable_global) // accedemos por que es global 
console.log(local) // marcara error por que esta variable solo se puede acceder desde la funcion que la creo 