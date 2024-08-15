// https://jsonplaceholder.typicode.com/users/

// vmos a ver otra forpma de asyn await con fetch


async function funcion2(numero) {
    const url = "https://jsonplaceholder.typicode.com/users/" + numero
    await new Promise(resolve => setTimeout(resolve , 5000))
    const response = await fetch(url)
    if(!response.ok){
        console.log(response.status)
    }
    const data = await response.json()
    return data 
}

async function funcion(){
    let numero = "1"
    try {
        const mensaje = await funcion2(numero)
        console.log(mensaje)
    } catch (error) {
        console.log(error)
    }
}

funcion()