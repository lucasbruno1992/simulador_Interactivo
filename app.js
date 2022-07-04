let precio = " "
let total = " "

function cuotas(precio, cantidadDeCuotas) {
    switch (cantidadDeCuotas) {
        case 1:
            return (`En ${cantidadDeCuotas} cuota de $ ${precio}`);
            break;
        case 3:
            return (`En ${cantidadDeCuotas} cuotas de $ ${precio/3} cada una`);
            break;
        case 6:
            return (`En ${cantidadDeCuotas} cuotas de $ ${precio/6} cada una`);
            break;
        case 12:
            return (`En ${cantidadDeCuotas} cuotas de $ ${precio/12} cada una`);
            break;
        case 18:
            return (`En ${cantidadDeCuotas} cuotas de $ ${precio/18} cada una`);
            break;
        default:
            alert(`No ingresó cantidad de cuotas validados.`);
    }
}

alert (cuotas(parseInt(prompt(`Ingrese el precio: `)),parseInt(prompt(`Ingrese la cantidad de cuotas:
1 cuota;
3 cuotas;
6 cuotas;
12 cuotas;`))))


