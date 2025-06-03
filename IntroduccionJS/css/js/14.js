// Arrays o Arreglos

const numeros = [100, 209, 33, 3, 500];
console.table(numeros);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.table(meses);

const arreglo = [ "Buenas", 20, false, "No", null, { nombre: "Bryan", edad: 18 }, [1, 2, 3] ];

console.log(arreglo);

//Accediendo a los valores de un arreglo

console.log(numeros[3]);
console.log(numeros[0]);
console.log(numeros[10]); //undefined

// Saber la longitud de un arreglo
console.log(numeros.length);

// Recorrer un arreglo con un forEach
meses.forEach( function(mes) {
    console.log(mes);
})