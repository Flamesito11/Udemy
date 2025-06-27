
 const score = 501;
 
 if(score == 500) {
     console.log("You have a perfect score!");
 } else{
     console.log("Your score is not perfect.");
 }
 const plata = 2000;
 const carrito = 1000;

 if(plata > carrito) {
     console.log("Tienes suficiente dinero para comprar el carrito.");
 } else{
     console.log("No tienes suficiente dinero para comprar el carrito.");
 }

const rol = "editor";

if(rol === "admin") {
    console.log("Tienes acceso al panel de administración.");

}else if (rol === "editor") {
    console.log("Tienes acceso al panel de edición.");

}else {
    console.log("No tienes acceso al panel de administración.");
}