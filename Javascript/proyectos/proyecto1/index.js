document.addEventListener('DOMContentLoaded' , function(){
   let repeticion = 10
   funcion(funcion2,repeticion)

})

function funcion(callback,repeticion){
    setTimeout(() => {
        if(repeticion >= 0 ){
           if(repeticion == 0){
            callback(repeticion)
            funcion(callback,repeticion + 10)
           }else{
            callback(repeticion)
            funcion(callback , repeticion - 1 )
           }
        }
    },1000)
}

function funcion2(numero){
    let numero2 = document.getElementById("numero")
    numero2.innerHTML = numero
}