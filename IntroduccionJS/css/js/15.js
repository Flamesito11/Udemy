const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const carrito = [
    { nombre: "Monitor HD", precio: 700 },
    { nombre: "Televisor Smart TV", precio: 1000 },
    { nombre: "Tablet", precio: 450 },
    { nombre: "Audifonos", precio: 100 },
    { nombre: "Teclado", precio: 300 },
    { nombre: "Celular", precio: 700 }

];

// forEach para recorrer un arreglo
meses.forEach(function(mes){
    if(mes == 'Diciembre') {
        console.log("Existe!!");
    }

})

//Includes 
let resul = meses.includes('Diciembre');

//Some para arrays de objetos

resul = carrito.some(function(producto){
    return producto.nombre === 'Teclado';
})

//.Reduce
resul = carrito.reduce(function(total, producto){
    return total + producto.precio;
}, 0);


//Filter
resul = carrito.filter(function(producto){
    return producto.precio > 400;

})

resul = carrito.filter(function(producto){
    return producto.nombre !== "Teclado";

})
console.log(resul);