fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json' // el servidor ncesita saber que tipo de infromacion y en que formato se la mandaremos xml json etc etc esta es para json 
  },
  body: JSON.stringify({ // el body es la informacion que le mandaremos 
    title: 'Nuevo post',
    body: 'Contenido del post',
    userId: 1
  })
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  console.error('Error:', error);
});
