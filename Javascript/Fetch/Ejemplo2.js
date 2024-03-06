// Tu clave de API de TMDb
const apiKey = 'TU_CLAVE_DE_API';

// URL base de la API de TMDb
const apiUrl = 'https://api.themoviedb.org/3';

// Punto final para obtener películas populares
const popularMoviesEndpoint = '/movie/popular';

// Construir la URL completa
const fullUrl = `${apiUrl}${popularMoviesEndpoint}?api_key=${apiKey}`;

// Realizar la solicitud a la API usando fetch
fetch(fullUrl)
    .then(response => {
        if (!response.ok) { 
            
            throw new Error(`Error de red: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Trabajar con los datos obtenidos de la API
        console.log('Películas populares:', data.results);
        // Puedes realizar operaciones adicionales aquí
    })
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });
