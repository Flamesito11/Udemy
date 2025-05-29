//Stings o Cadenas de texto

const producto = "Monitor";
const producto2 = String("Televisor");
const producto3 = new String("Tablet");
const publicacion = "Albion Online es un MMO RPG de modo sandbox en el que escribes tu propia historia.";
const correo = "correo@correo.com";

console.log(producto.length);
console.log(producto2);
console.log(producto3);

//IndexOf
console.log(publicacion.indexOf("MMO")); 
console.log(producto.indexOf("Monitor")); // Devuelve la posición del primer carácter encontrado
console.log(producto.indexOf("Tablet")); // Devuelve -1 si no se encuentra
console.log(correo.indexOf("@")); // Devuelve la posición del carácter '@' en el correo

//Includes (Retorna true o false)
console.log(publicacion.includes("MMO")); // true
console.log(producto.includes("Televisor")); // false
