const apiKey = '73614554447e2f2943b77dd5e675f2ac'; // Tu clave API
const city = 'Ciudad de México'; // Cambia por la ciudad que desees
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

async function getWeather() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log(`El clima en ${data.name}:`);
        console.log(`Temperatura: ${data.main.temp}°C`);
        console.log(`Clima: ${data.weather[0].description}`);
        console.log(`Humedad: ${data.main.humidity}%`);
    } catch (error) {
        console.log('Ocurrió un error:', error);
    }
}

getWeather();

