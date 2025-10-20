 const carrito = [
     { nombre: "Monitor HD", precio: 700 },
     { nombre: "Televisor Smart TV", precio: 1000 },
     { nombre: "Tablet", precio: 450 },
     { nombre: "Audifonos", precio: 100 },
     { nombre: "Teclado", precio: 300 },
     { nombre: "Celular", precio: 700 }
 ];

//For Each 
carrito.forEach(producto => console.log(producto.nombre));

 //Map
 const array1 =  carrito.map(producto => console.log(producto.nombre));

    //Filter
    const resultado = carrito.filter(producto => producto.precio > 400);
    console.log(resultado);

    //Find
    const resultado2 = carrito.find(producto => producto.nombre === 'Tablet');
    console.log(resultado2);

