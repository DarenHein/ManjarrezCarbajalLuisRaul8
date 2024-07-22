// Conectar al servidor WebSocket
const socket = new WebSocket('ws://localhost:3000');

// Referencias a los elementos del DOM
const chat = document.getElementById('chat');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');

// Manejar mensajes recibidos del servidor
socket.onmessage = (event) => {
  const message = event.data;
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chat.appendChild(messageElement);
  chat.scrollTop = chat.scrollHeight; // Desplazar hacia abajo
};

// Enviar mensaje al servidor cuando se hace clic en el botón
sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message) {
    socket.send(message);
    messageInput.value = ''; // Limpiar el campo de entrada
  }
});

// Enviar mensaje al servidor cuando se presiona Enter
messageInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendButton.click();
  }
});
