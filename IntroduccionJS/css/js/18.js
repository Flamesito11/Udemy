//Funciones con parametros y Argumentos

function suma(numero1 = 0, numero2 = 0){ //numero1 y numero2 son parametros
                                         // numero = 0 es un valor por defecto
    console.log(numero1*numero2);

}
suma(10,10);//Argumentos, valores reales

const suma2 = function(numero1, numero2){ //numero1 y numero2 son parametros
    console.log(numero1 / numero2);
}
suma2(10,2);
