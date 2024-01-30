
// todo es que esto en si es poo en js 
const persona = { // la calse 
    nombre : "Luis", // atributos 
    edad : 12 , 
    sexo : "masculino",

    correr : function(){ // metodos 
        console.log("nombre : ", this.nombre , "edad " , this.edad , "sexo : ", this.sexo);
    }
};
// instancia del objeto 
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.sexo)
persona.correr()