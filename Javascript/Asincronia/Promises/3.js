

// todo vamos a consumir una api con promises 

function funcion(url){
    // fecth ya tiene una promise integrada solo en opciones perzonalidadas es que se ocupa el new promisses

    return fetch(url)
    .then(response => {
        if(!response.ok){
            console.log(response.status)
        }else{
            return response.json()
        }
    })
}

const url = "https://jsonplaceholder.typicode.com/posts"
funcion(url)
.then(data => {
    console.log(data)
})
