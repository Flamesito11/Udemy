// Arrays o Arreglos

const numeros = [100, 209, 33, 3, 500];
console.table(numeros);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.table(meses);

// const arreglo = [ "Buenas", 20, false, "No", null, { nombre: "Bryan", edad: 18 }, [1, 2, 3] ];

// console.log(arreglo);

// //Accediendo a los valores de un arreglo

// console.log(numeros[3]);
// console.log(numeros[0]);
// console.log(numeros[10]); //undefined

// // Saber la longitud de un arreglo
// console.log(numeros.length);

// // Recorrer un arreglo con un forEach
// meses.forEach( function(mes) {
//     console.log(mes);
// })



// Modificando un arreglo
numeros.push(1000)// Agrega un elemento al final del arreglo
numeros.unshift(0);// Agrega un elemento al inicio del arreglo

// meses.pop(); // Elimina el último elemento del arreglo
// meses.shift(); // Elimina el primer elemento del arreglo

meses.splice(7,1); // Elimina un elemento en una posición específica (en este caso, Agosto)
console.table(numeros);
console.table(meses);

//Rest Operator o Spread Operator

const newArrray = [...meses, 'enero']; // Crea un nuevo arreglo que contiene todos los elementos de 'meses' y agrega 'enero' al final
const newArrray1 = ['Diciembre', ...meses]; // Crea un nuevo arreglo que comienza con 'Diciembre' y luego incluye todos los elementos de 'meses'
console.table(newArrray);
console.table(newArrray1);