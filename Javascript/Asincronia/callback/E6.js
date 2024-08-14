

// https://jsonplaceholder.typicode.com/posts 

//vamos a jugarcon callback anidados 


 function funcion(url,callback){
    // eta funcion solo se encarga de hacer la solicitud ala api 
    console.log("Hacinedo la solicitud ala api ....")
    setTimeout(() => {
        fetch(url)
        .then(response => {
            if(!response.ok){
                console.log("error",response)
            }else {
                return response.json()
            }
        })
        .then(data => {
            callback(null,data)
        })
        .catch(error => {
            callback(error)
        })
    },2000)
 }

function funcion2(error,data){

    // esta funcion solo recibe los datos los imprime ahora are otra funcion que medesoloel primer dato 
    if(error){
        console.log(error)
    }else{
        console.log("se an obtenido los datos de la api ")
        //console.log(data[0])
        funcion3(0,data,funcion4)
    }
}

function funcion3(numero , data , callback){
    console.log("Se estan filtranbdo los datos solo el usuario con ide O")
    setTimeout(() => {
        if(numero == 0){
            let user = data[numero]
            callback(null,user)
        }else{
            callback("no se ecnotr usuario con ese id")
        }
    },3000)
}
function funcion4(error,resultado){
    if(error){
        console.log(error)
    }else {
        console.log("El usuario es : ",resultado)
        
    }
}

const url = "https://jsonplaceholder.typicode.com/posts"
funcion(url , funcion2)