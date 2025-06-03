const producto = {
    nombre: "Monitor",
    precio: 1000,
    disponible: true
}

//Forma Antigua de acceder a las propiedades del objeto
const precio_Producto = producto.precio;
const nombre_Producto = producto.nombre;

console.log(precio_Producto); 
console.log(nombre_Producto); 

//Destructuring de objetos

const {precio, nombre} = producto


console.log(precio); 
console.log(nombre); 