const apiUrl = 'https://swapi.dev/api/people/1/';

// Realizar la solicitud utilizando fetch
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error de red - ${response.status}`);
    }
    return response.json();
  })
  .then(character => {
    // Imprimir la información del personaje
    console.log('Nombre del personaje:', character.name);
    console.log('Altura:', character.height);
    console.log('Peso:', character.mass);
    console.log('Color de cabello:', character.hair_color);
  })
  .catch(error => {
    console.error('Error al recuperar datos:', error);
  });
