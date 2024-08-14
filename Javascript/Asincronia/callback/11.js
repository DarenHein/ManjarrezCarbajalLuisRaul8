function doSomething(callback) {
    setTimeout(() => {
        console.log("Tarea completada");
        callback();
    }, 1000);
}

console.log("Antes de la tarea");
	doSomething(() => { // mandamos una funcion flecha en vesde una funcion normal 
    console.log("Callback ejecutado");
});
console.log("Después de la tarea");

