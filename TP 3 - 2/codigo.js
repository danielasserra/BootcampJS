//Ejercicio 1 

//superficie Rectangulo
var base = 10;
var altura = 15;
var superficieRect = base*altura

console.log(`la superficie del rectangulo es ${superficieRect}`);

//superficie Triángulo
var superficieTri = (base*altura)/2;

console.log('la superficie del triángulo es '+ superficieTri)

//superficie círculo

const PI = 3.14;
var radio = 30;
var superficieCir= PI*(radio**2);

console.log('la superfice del círculo es '+superficieCir);

//Ejercicio 2

var num1 = 17;
var num2 = 59;
var num3 = 41;

console.log('el producto de los tres números da '+ (num1*num2*num3));
console.log('la suma de los tres números da ' +(num1+num2+num3));
console.log('el promedio de los tres números da ' + ((num1+num2+num3)/3))

//Ejercicio 3
var sombreroRojo = 9000;
var vestidoAzul = 15000;
var pañueloNaranja = 5000;
var sacoRojo = 18000;
var guantesNaranja = 12000;

const DESCUENTO = 0.15

var valorCompra = sombreroRojo+vestidoAzul+pañueloNaranja+sacoRojo+guantesNaranja;

var DescTotal = valorCompra*DESCUENTO;

var valorCompraDesc = valorCompra - DescTotal;

console.log('total de la compra con descuento ' + valorCompraDesc)

//Ejercicio 4

var pesosAr = prompt ('ingrese el monto en pesos que posee');
var dolarHoy = 120.25; //valor del dolar BNA para compra el 30/4/22
var dolarPais= dolarHoy + (dolarHoy*0.65);

var dolar = pesosAr/dolarPais;

alert ('usted compró USD' + dolar, ' con sus $' + pesosAr);
console.log ('usted compró USD' + dolar, ' con sus $' + pesosAr);

//Ejercicio 5

var totalCompra = prompt ('ingrese el monto total de su compra');
var iva = totalCompra*0.21

alert('el valor correspondiente al iva es de $' + iva);
console.log('el valor correspondiente al iva es de $' + iva);