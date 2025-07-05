const MetodoDePago = "Efectivo";

switch(MetodoDePago) {
    case "Tarjeta de Credito":
        console.log("El metodo de pago es Tarjeta de Credito");
        break;

    case "Tarjeta de Debito":
        console.log("El metodo de pago es Tarjeta de Debito");
        break;

    case "Efectivo":
        console.log("El metodo de pago es Efectivo");
        break;

    default:
        console.log("Metodo de pago no reconocido");
        break;
}