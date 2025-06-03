// Objetos

const nombre_Producto = "Monitor";
const precio_Producto = 1000;
const disponible = true;


// Definición de un objeto
const producto = {
    nombre: "Monitor",
    precio: 1000,
    disponible: true
}


// console.log(producto.nombre);  Acceso a una propiedad del objeto
// console.log(producto.precio);  Acceso a otra propiedad del objeto
// console.log(producto.disponible);  Acceso a otra propiedad del objeto

// consoconsole.log(producto["nombre"]); Acceso a una propiedad del objeto usando notación de corchetes

//Agregar una propiedad al objeto

producto.imagen = "imagen.jpg"; // Agregar una nueva propiedad al objeto

//Eliminar una propiedad del objeto

delete producto.disponible; 
console.log(producto);