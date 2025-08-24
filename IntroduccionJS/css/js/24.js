//Ciclo For

// for (let i = 0;i <= 10; i++) {
//     console.log(i);

// }

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i +" es par");
//     } else {
//         console.log(i +" es impar");
//     }
// }

 const carrito = [
     { nombre: "Monitor HD", precio: 700 },
     { nombre: "Televisor Smart TV", precio: 1000 },
     { nombre: "Tablet", precio: 450 },
     { nombre: "Audifonos", precio: 100 },
     { nombre: "Teclado", precio: 300 },
     { nombre: "Celular", precio: 700 }
 ];
 
 for (let i = 0; i < carrito.length; i++) {
     console.log(carrito[i].nombre);
 }


//Ciclo while

// let i = 0;

// while (i <= 100) {// condicion
    
//     if(i % 2 == 0) {
//         console.log(i + " es par")
//     }
//     else{
//         console.log(i + " es impar")
//     }

//     i++;//incremento
// }


// Ciclo do while

let i = 0;

do{
    console.log(i);
    i++;
}while(i < 10);