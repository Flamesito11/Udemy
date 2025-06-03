"use strict";//Codigo JS en modo estricto

const producto = {
    nombre: "Monitor",
    precio: 1000,
    disponible: true
}

Object.freeze(producto); // Congela el objeto, no se pueden agregar, eliminar o modificar propiedades

Object.seal(producto);  // Sella el objeto, no se pueden agregar o eliminar propiedades, pero si se pueden modificar
producto.disponible = false; 

// console.log(Object.isFrozen(producto)); 

console.log(producto);