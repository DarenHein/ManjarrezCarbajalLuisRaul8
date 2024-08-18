// todo ahroa hacemos una solicitud http con delete 

// `https://jsonplaceholder.typicode.com/posts/${id}
// pero ocuapremos asyn await 


// ahroa la funcion que ara la solicitud fetch 
async function dropUser(){
    const id = 2 
    const url = "https://jsonplaceholder.typicode.com/posts/" + id

    // cremoas el timepo de espera 
    await new Promise(resolve => setTimeout(resolve,3000))
    // ahora hacemos la consulta ala api 
    const response = await fetch(url,{
        method : 'DELETE'
    })

    if(!response.ok){
        console.log("erroe " , response.status)
        return
    }

    // muchas vces loser servores cunado eliminamos no tienen cuerpod e respueta 
    try {
        // ahroa consolatmaos lo que nos mando la base de datos
        const data = await response.json()
        console.log("usuaro eliminado con exito ")
        return data 
    } catch (error) {
        console.log("Usuario eliminado pero  el servidor no responde ")
    }
}

async function funcion(){
    try {
        const mensaje = await dropUser()
        console.log("Usuario eliminado con exito " , mensaje)
    } catch (error) {
        console.log(error)
    }
}

funcion()