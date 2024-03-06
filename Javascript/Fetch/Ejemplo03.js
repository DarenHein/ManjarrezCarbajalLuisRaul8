

// vamos a crear otra api fetch basica para recordar



const apiUrl  = 'https://jsonplaceholder.typicode.com/posts'; 

fetch(apiUrl)
    .then(response => {
        if(!response.ok){
            throw new Error("no se pudo concetar")
        }
        return response.json()
    })
    .then(data => {
       // console.log("",data)
        console.log(Object.keys(data[0]))
        console.log(Object.values(data[0]))

    })
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });