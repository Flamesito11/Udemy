function suma(numero1, numero2){
    return numero1 + numero2
}

const resultado = suma(10, 20);
console.log(resultado);

let total = 0;

function carrito(precio) {
    return total += precio;
}

function Impuesto(total) {
    return 1.20 * total;
}

total = carrito(100);   
total = carrito(5000);
total = carrito(800);
total = carrito(1000);

console.log(total);

const valorTotal = Impuesto(total);

console.log(`El valor total del carrito es: ${valorTotal}`);