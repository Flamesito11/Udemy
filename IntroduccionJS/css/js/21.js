//Arrow functions

const sumar = (n1, n2) => console.log(n1 + n2);
sumar(10, 20);



const learning = language => console.log(`Learning ${language}`);
learning("JavaScript");



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
meses.forEach( mes =>{
    if(mes == 'Diciembre') {
        console.log("Existe!!");
    }

})

let resul;

//Some para arrays de objetos
resul = carrito.some(producto => producto.nombre === 'Teclado');

//.Reduce para sumar los precios de un arreglo de objetos
resul = carrito.reduce((total, producto) => total + producto.precio, 0);


//Filter    
resul = carrito.filter(producto => producto.precio > 400);

resul = carrito.filter((producto) => producto.nombre !== "Teclado");
console.log(resul);