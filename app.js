let precio = parseInt(prompt(`Ingrese un precio: `))
let total = ""
let cantidadDeCuotas = ""
let medioDePago = prompt(`Ingrese medio de pago: 
efectivo;
con tarjeta;`)
let cuponDeDescuento = (prompt(`Ingrese cupon de descuento: `))
let listado = ""

switch (medioDePago.toLowerCase()) {
    case "efectivo":
        if(cuponDeDescuento.toLowerCase() !== "promo1"){
            total = precio;
            alert(`Total de su compra es: ${total}`);
            break;
        } else{
            total = precio-100;
            alert(`Total de su compra es: ${total}`);
            break;
        }
    case "con tarjeta":
        for (let i = 1; i<=4; i++){
            total = precio/(i*3);
            listado += `En ${i*3} cuotas de $${total} cada una` + "\n";
        }
        alert(listado);
        alert (cuotas(parseInt(prompt(`Ingrese la cantidad de cuotas:
3 cuotas;
6 cuotas;
9 cuotas;
12 cuotas;`))));
break;
    default: alert(`No ingreso metodo de pago`);
    alert(medioDePago);
        break;
}

function cuotas(cantidadDeCuotas) {
    switch (cantidadDeCuotas) {
        case 3:
            return alert(`En ${cantidadDeCuotas} cuotas el valor de cada cuota es de: $` + precio / 3);
            break;
        case 6:
            return alert(`En ${cantidadDeCuotas} cuotas el valor de cada cuota es de: $` +  precio / 6);
            break;
        case 9:
            return alert(`En ${cantidadDeCuotas} cuotas el valor de cada cuota es de: $` + precio / 9);
            break;
        case 12:
            return alert(`En ${cantidadDeCuotas} cuotas el valor de cada cuota es de: $` + precio / 12);
            break;
        default:
            alert(`No ingresó cantidad de cuotas validados.`);
            alert (cuotas(parseInt(prompt(`Ingrese la cantidad de cuotas:
    3 cuotas;
    6 cuotas;
    9 cuotas;
    12 cuotas;`))));
    break;
    }
}


