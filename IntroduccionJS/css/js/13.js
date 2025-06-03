//Unir dos objetos en JavaScript

const producto = {
    nombre: "Monitor",
    precio: 1000,
    disponible: true
}

const medidas = {
    peso: "10kg",
    medida: "100m"
}

const new_Prodructo = { ...producto, ...medidas};

console.log(producto);
console.log(new_Prodructo);