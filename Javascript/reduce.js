/*
 *el reduce simplemente sirve para la 

 reduce un array a un solo elemtno 
 yo lo hacia con un for normal pero este esta mejor por que queda en una linea de codigo 
 * */

let array = [1,2,3,4,5]

let resultado = array.reduce((acum , numero) => acum + numero , 0)

console.log(resultado)

/*
 *ahro la explciacion

 acum = es un acumluador donde se acumula el resultado 
 numero es cada elemento del array 
 0 es donde inicia el el acumludaor 

 ejemplo acum = 0 
 num = a un elemento del array 


 * */
