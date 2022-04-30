//Ejercicio 1
var num1 = parseInt (prompt('ingrese un número'));
var num2 = parseInt (prompt('ingrese otro número'));

if (num1<num2) {

    alert('el número menor es ' + num1)
    console.log('el número menor es ' + num2)

} else {

    alert('el número menor es ' + num2)
    console.log('el número menor es ' + num2)

}

//Ejercicio 2
var num3 = parseInt (prompt('ingrese un número para saber si es par o impar'));

if (num3 % 2 == 0) {
    alert ('el numero ' +num3 +  ' es par.');
    console.log ('el numero ' +num3 + ' es par.');

} else {
    alert ('el número ' +num3 + ' es impar.');
    console.log ('el número ' +num3, ' es impar.');
}

//Ejercicio 3
var ganeLaCarrera = false;

if (ganeLaCarrera == true) {
    console.log('Ganaste');
} else {
    console.log ('Perdiste');
}

//Ejercicio 4
var posicionEnLaCarrera = 6;

if (posicionEnLaCarrera == 1) {
    console.log('FELICITACIONES, SALISTE 1RO');
} else if (posicionEnLaCarrera == 2) {
    console.log('Te falto poquito para ganar');
} else if (posicionEnLaCarrera == 3) {
    console.log('Sos un orgullo para tu familia');
} else if (posicionEnLaCarrera > 3) {
    console.log('Volvé a tu casa')
} else {
    console.log('No tires fruta');
}

//Ejercicio 6
//utilizo variables de los ejercicios 1 y 2
var totalCompra = num1+num2+num3
var descuentoCompra = totalCompra*0.2;
var totalCompraConDesc = totalCompra - descuentoCompra;

if(totalCompra >= 1000) {
    alert(`El total de su compra con descuento es $ ${totalCompraConDesc}`);
    console.log(`El total de su compra con descuento es $ ${totalCompraConDesc}`);    
} else {
    alert(`El total de su compra sin descuento es $${totalCompraConDesc}`)
    console.log(`El total de su compra sin descuento es $${totalCompraConDesc}`);
}

//Ejercicio 7
//utilizo variables de los ejercicios 1 y 2
var montoVendido = parseInt (prompt ('ingrese el monto vendido'));
var codigoDeVendedor = parseInt (prompt ('ingrese el código de vendedor'));
var comision30 = montoVendido*0.3;
var comision20 = montoVendido*0.2;
var comision10 = montoVendido*0.1;

if (codigoDeVendedor < 100) {
    alert (`vendedor n° ${codigoDeVendedor}, monto vendido $${montoVendido}, comisión 30%`)
    console.log (`vendedor n° ${codigoDeVendedor}, monto vendido $${montoVendido}, comisión $${comision30}`)
} else if (codigoDeVendedor >= 100 && codigoDeVendedor <= 200) {
    alert(`vendedor n° ${codigoDeVendedor}, monto vendido ${montoVendido}, comisión $${comision20}`)
    console.log(`vendedor n° ${codigoDeVendedor}, monto vendido $${montoVendido}, comisión 20%`)
} else if (codigoDeVendedor > 200) {
    alert (`vendedor n° ${codigoDeVendedor}, monto vendido $${montoVendido}, comisión $${comision10}`);
    console.log(`vendedor n° ${codigoDeVendedor}, monto vendido $${montoVendido}, comisión $${comision10}`);
}

//Ejercicio 8
var d = parseInt(prompt('Ingrese el número de día de la semana (del 1 al 7)'));

if (d == 1) {
    console.log('lunes');
} else if (d == 2) {
    console.log('martes');
} else if (d == 3) {
    console.log('miércoles');
} else if (d == 4) {
    console.log('jueves');
} else if (d == 5) {
    console.log('viernes');
} else if (d == 6) {
    console.log('sábado');
} else if (d == 7) {
    console.log('domingo');
}

//Ejercicio 9
var grupo = parseInt(prompt('ingrese la cantidad de entradas de cine a comprar'));

if (grupo < 8) {
    console.log(`el valor de las entradas es de $${grupo*1.5}`);
} else if (grupo >= 8) {
    console.log(`el valor de las entradas es de $${grupo*0.5}`)
}

//Ejercicio 10
var compraFarmacia = parseInt(prompt('Ingrese el monto total de la compra en farmacia'));
var conDescuento = compraFarmacia*0.85; 

if (compraFarmacia <= 100) {
    console.log(`no aplica el descuento, el total de la compra es de $${compraFarmacia}`)
} else {
    console.log(`Se aplica 15% de descuento, el total de la compra es $${conDescuento}`);
}