

const primeraCuotaBonificada = true;

const tasaInteres = 15;
const montoMinimo = 100;
const montoMaximo = 10000;
const cantidadMinimaCuotas = 1;
const cantidadMaximaCuotas = 48;


function calcularPrestamo(){
    let mensaje = '';
    let montoDelPrestamo = prompt("ingresa al monto a solicitar");
    if(isNaN(montoDelPrestamo)){
        alert("el monto del prestamo debe ser un numero. Recibido " + montoDelPrestamo);
        return false;
    }
    montoDelPrestamo = parseFloat(montoDelPrestamo);
    if(montoDelPrestamo <= montoMinimo){
        alert("el monto del prestamo debe ser mayor a " + montoMinimo + ". Recibido " + montoDelPrestamo);
        return false;
    }
    if(montoDelPrestamo > montoMaximo){
        alert("el monto del prestamo debe ser menor o igual a " + montoMaximo + ". Recibido " + montoDelPrestamo);
        return false;
    }
    let cantidadDeCuotas = prompt ("ingrese cantidad de cuotas");
    if(isNaN(cantidadDeCuotas)){
        alert("la cantidad de cuotas debe ser un numero. Recibido: " + cantidadDeCuotas);
        return false;
    }
    cantidadDeCuotas = parseInt(cantidadDeCuotas);
    if(cantidadDeCuotas > cantidadMaximaCuotas){
        alert('la cantidad de cuotas debe ser menor a ' + cantidadMaximaCuotas + '. Recibido: ' + cantidadDeCuotas);
        return false;
    }
    if(cantidadDeCuotas < cantidadMinimaCuotas){
        alert('la cantidad de cuotas debe ser mayor o igual a ' + cantidadMinimaCuotas + '. Recibido: ' + cantidadDeCuotas);
        return false;
    }
    let montoBaseDeCuota = parseFloat(montoDelPrestamo / cantidadDeCuotas);

    let InteresPorMes = parseFloat(tasaInteres / 12);

    for(let i = 0 ; i < cantidadDeCuotas ; i++){
        let montoCuota = parseFloat(montoBaseDeCuota + (montoDelPrestamo * InteresPorMes / 100));
        if(cuotaBonificada(i)){
            mensaje += 'Cuota ' + ( i + 1 ) + ' por el monto de ' + montoCuota + ' ha sido bonificada' + "\n"
        }else{
            mensaje += 'Cuota ' + ( i + 1 ) + ' por el monto de ' + montoCuota + ', la cual consiste en ' + montoBaseDeCuota + ' de capital y ' +   InteresPorMes + ' de interes' + "\n"
        }
    }
    alert(mensaje);
}
function cuotaBonificada (indice) {
    if (indice == 0) {
        return primeraCuotaBonificada; 
    }else {
        return false;
    }
}

calcularPrestamo();

