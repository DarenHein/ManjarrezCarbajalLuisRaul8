const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'daren',
  password: '5882',
  database: 'db'
});

// Establecer conexión
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
  
  // Aquí puedes realizar consultas u operaciones en la base de datos
});

// Manejar errores de conexión
connection.on('error', (error) => {
  console.error('Error de conexión:', error);
});

// Finalizar conexión al cerrar la aplicación
process.on('SIGINT', () => {
  connection.end((error) => {
    if (error) {
      console.error('Error al cerrar la conexión:', error);
    }
    console.log('Conexión cerrada');
    process.exit();
  });
});
