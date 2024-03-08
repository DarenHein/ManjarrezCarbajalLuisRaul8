function convertirDivisa() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const apiKey = 'TU_CLAVE_API'; // Reemplaza con tu clave API de Open Exchange Rates
    const apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency}?apikey=${apiKey}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error de red - ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        const exchangeRate = data.rates[toCurrency];
        const resultado = amount * exchangeRate;

        document.getElementById('resultado').textContent = `${amount} ${fromCurrency} es aproximadamente ${resultado.toFixed(2)} ${toCurrency}`;
      })
      .catch(error => {
        console.error('Error al recuperar datos:', error);
      });
  }