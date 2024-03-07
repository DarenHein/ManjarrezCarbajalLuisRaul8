
// primero vanos a crear el dom base 

document.addEventListener('DOMContentLoaded' , function(){
    // tomams los ides 
    var elemento = document.getElementById('buscar').value // el campo de texto 
    var boton = document.getElementById('boton')

    // ahora saccamos los valores de la api 

    boton.addEventListener('click',function(){
        // aqui empezaremos la solicutd 
        const url = 'https://jsonplaceholder.typicode.com/posts'; 

        fetch(url)
            .then(response =>{
                if (!response.ok){
                    throw new Error ("error en la solicutd de la api ")
                }

                return response.json()
            })

            .then(data => {
                // auiq es donde hacemos la magia con los archivos que revicimos con la data 
               console.log(data[0]) 
            
            })
            .catch(error =>{
                console.error("error" , error)
            })
    })

})