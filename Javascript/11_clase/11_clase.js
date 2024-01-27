
//todo las funciones son 

// todo funciones en javascript 

// todo funcion basica 
function funcion(){
    console.log("Hola mundo")
}
// todo funcion con pase de parametros 
function funcion2(a , b ){
    let c = a + b 
    console.log("El resultado de la suma es : " , c )
}

// todo funcion que rtorn un valor 
function funcion3() {
   return "Funcion con retorno" 
}

// todo por buenas practicas siempre tiene que hbaer una funcion main que rija alas demas 
// todo como una tipo jerarquia 
function main(){
    console.log("Hola mundo")
    let numero = 3 
    let numero2 = 12 
    funcion()
    funcion2(numero , numero2)
    let cadena = funcion3()
    console.log(cadena)
}

main()