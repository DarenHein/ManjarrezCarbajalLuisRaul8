// ### Ejercicio 7: Filtrar y transformar objetos
// Dado el array `productos = [{ nombre: 'Laptop', precio: 800 }, { nombre: 'Mouse', precio: 20 }, { nombre: 'Teclado', precio: 50 }]`, usa `filter` para obtener solo los productos que cuestan más de 30 y luego usa `map` para crear un nuevo array con solo los nombres de esos productos.


const Productos = [
    {
        nombre : "Laptop",
        precio : 30
    },
    {
        nombre : "Celular",
        precio : 40 
    },
    {
        nombre : "Pc",
        precio : 100
    }
]

 // ahora hacemos e filtro de Productos 
 const preciosMin = Productos.filter( Productos => Productos["precio"] > 30)

 console.log(preciosMin)