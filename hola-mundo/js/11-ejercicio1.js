'use strict';

/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
*/

var numero1 = parseInt(propmt("Introduce el primer numero", 0));
var numero2 = parseInt(propmt("Introduce el segundo numero", 0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    var numero1 = parseInt(propmt("Introduce el primer numero", 0));
    var numero2 = parseInt(propmt("Introduce el segundo numero", 0));
}

console.log(numero1, numero2);

if (numero1 == numero2) {
    alert("LOS NUMEROS SON IGUALES");
} else if (numero1 > numero2) {
    alert("EL NUMERO MAYOR ES " + numero1);
    alert("EL NUMERO MENOR ES " + numero2);
} else if (numero2 > numero2) {
    alert("EL NUMERO MAYOR ES " + numero2);
    alert("EL NUMERO MENOR ES " + numero1);
} else {
    alert("INTRODUCE NUMEROS CORRECTOS")
}