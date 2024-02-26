// crearemos un dic desde js 

document.addEventListener('DOMContentLoaded',function(){
    var div = document.createElement('div') // todo se crea el elemnto en este caso un div basico 
    div.textContent="hola mundo" // todo agreamos un texto descriptivo 

    //! ahora agregaremos un atributo a ese elemtno creato 
    div.setAttribute('id','mi_div') // !ahora estediv tiene su id 

    //! ahora obtenemos el id de ese id y empezamos a jugar 
    var id_div = document.getElementById('mi_div')
    
    // ahora podemos cambair los estilos mediente el id o directamente desde el elemento creado 

    div.style.color="blue" // cambiamos el color de la letra 
    

    document.body.appendChild(div) // todo con esto agregamos el nuevo div al cuerpo de la apgina web 


})