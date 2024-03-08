const apiKey = 'TU_CLAVE_API'; // Reemplaza con tu clave API de ExchangeRate-API
const baseCurrency = 'USD';
const targetCurrency = 'EUR';

const apiUrl = `https://open.er-api.com/v6/latest/${baseCurrency}?apikey=${apiKey}`;

// Realizar la solicitud utilizando fetch
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error de red - ${response.status}: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    const exchangeRate = data.rates[targetCurrency];
    console.log(`Tasa de cambio de ${baseCurrency} a ${targetCurrency}: ${exchangeRate}`);
  })
  .catch(error => {
    console.error('Error al recuperar datos:', error);
  });
