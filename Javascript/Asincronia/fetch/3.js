// url : https://jsonplaceholder.typicode.com/posts

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',  // El método por defecto es GET, pero aquí indicamos que estamos enviando datos con POST
    headers: {
        'Content-Type': 'application/json'  // Le decimos al servidor que estamos enviando datos en formato JSON
    },
    body: JSON.stringify({
        nombre: "Luis",
        edad: 30
    })  // El cuerpo de la solicitud contiene los datos que enviamos, convertidos a JSON
})
// Explicación del código:
// 1. fetch hace solicitudes HTTP a servidores. Aquí estamos haciendo una solicitud POST a la URL especificada.
// 2. method: Por defecto, fetch usa el método GET, pero podemos indicar otros como POST, PUT, DELETE, etc. En este caso, usamos POST para enviar datos.
// 3. headers: Estos son encabezados HTTP que le indican al servidor cómo interpretar los datos que le enviamos. Aquí, especificamos que estamos enviando datos en formato JSON con 'Content-Type': 'application/json'.
// 4. body: Es el cuerpo de la solicitud. Aquí estamos enviando un objeto JSON con los datos { nombre: "Luis", edad: 30 }. Usamos JSON.stringify() para convertir el objeto JavaScript en una cadena JSON antes de enviarlo.

// Manejo de la respuesta del servidor:
.then(response => response.json())  // Convertimos la respuesta del servidor a un objeto JSON para poder trabajar con ella
.then(data => {
    console.log("Éxito:", data);  // Aquí manejamos la respuesta exitosa del servidor y mostramos los datos en la consola
})
.catch(error => {
    console.log("Error:", error);  // Aquí manejamos cualquier error que ocurra durante la solicitud y lo mostramos en la consola
});

