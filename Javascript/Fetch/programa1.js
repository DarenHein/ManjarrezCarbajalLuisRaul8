// en este vamos a explicar conceptos basicos de las apifetch 

// ncesitamos una url de una api que vamos a consultar los datos 
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=TU_API_KEY';

// aqui vamos a manejar las distitas solicitudes de la api 
fetch(apiUrl) // mandamos la url 
  .then(response => { // respondemos con .then 
    // si la respuesta no es la deseada 
    if (!response.ok) {
      throw new Error('Ocurrió un problema al obtener los datos del clima');
    }
    // si la respuesta es exitosa mandmos o transformamos a json 
    return response.json();
  })
  .then(data => 
    // imprimimos los datos en pantalla  data es la informacion 
    console.log('Datos del clima:', data);
  })
  .catch(error => {
    // errores 	
    console.error('Error al obtener los datos del clima:', error);
  });
