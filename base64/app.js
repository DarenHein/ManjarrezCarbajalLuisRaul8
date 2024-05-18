const base64Encoded = "UmVjdWVyZGEgcXVlIGN1YW5kbyBjb2RpZmljYXMgYWxnbyBlbiBiYXNlNjQgTk8gbG8gZXN0w6FzIGNpZnJhbmRvLCBzaW5vIHF1ZSBzaW1wbGVtZW50ZSBsbyBlc3TDoXMgY29kaWZpY2FuZG8uDQoNCkxhIGNvbnRyYXNlw7FhIHBhcmEgc3VwZXJhciBlc3RlIHJldG8gZXM6IHJlY3VlcmRhcXVlYmFzZTY0Tk9lc2NpZnJhcg0KCg==";

// Convertir la cadena Base64 de nuevo a un buffer
const decodedBuffer = Buffer.from(base64Encoded, 'base64');

// Convertir el buffer de nuevo a una cadena
const decodedText = decodedBuffer.toString('utf-8');

console.log(decodedText); 

console.log(base64Encoded)
