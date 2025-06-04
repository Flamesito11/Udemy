//Funciones
function suma(){
    console.log(11*9);

}

suma();

//Expresion de la funcion
const suma2 = function(){
    console.log(12*12);
}

suma2();

//IIFE (Inmediatly Invoked Function Expression)
(function(){
    console.log("This is a function that runs immediately");
})();