
function funcion(){

    // vamos a tomar lo que escribe el usuarop 
    var variable = document.getElementById('dia').value
    console.log(typeof(variable)) // string 

    console.log (variable === 1)

    alert(variable) // stringt 

    switch(variable){ // 
        case "1" : 
            alert("es lunes")
        case 1 : 
            break
        case 2 : 
        break
        
        case "2" : 
        break
    }

}