// Escribe una función mostrarMensaje que tome un mensaje y un callback. La función debe mostrar el mensaje después de 1 segundo y luego ejecutar el callback. Usa esta función para mostrar tres mensajes en orden, uno después del otro.


// todo este cpodigo tinee algo que es nuevo n ejecucion apra mi la recurcion es cunado una funcion se llama a si misma 

function funcion(mensaje,callback, repeticion ){
    // segun tiene que ser tres mensaje que tiene que imprimir ocuapre un for alv 
    if (repeticion > 0){
        setTimeout(()=>{
            callback(mensaje)
            funcion(mensaje,callback,repeticion - 1 )
        }, 2000)
    }
}
function funcion2(mensaje){
   console.log(mensaje)
}
let repeticion = 3 
funcion("Hola mundo" , funcion2, repeticion )



/**?
 * 
 * todo que esta pasando en este codigo 
 * se manda ala funcion 1 un mensaje se le amnda otra funcion y una variable que se ale asiga el 3 
 * depues con un if si la varibale es mayor a 0 entrara en el if depsiues 
 * llamara al call back este funcion crea lo suyo y depues se vuelve a llamar a asi misma quitando le uno ala varibale repetidora 
 * eso se llama recursion cunado una variable se uclece a llamar asi misam 
 */