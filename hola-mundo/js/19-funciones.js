'use strict';

// Funciones
// Una función es una agrupación reutilizable de un conjunto de instrucciones

function porConsola(numero1, numero2) {
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicación: " + (numero1 * numero2));
    console.log("División: " + (numero1 / numero2));
    console.log("****************************");
}

function porPantalla(numero1, numero2) {
    document.write("Suma: " + (numero1 + numero2) + "<br/>");
    document.write("Resta: " + (numero1 - numero2) + "<br/>");
    document.write("Multiplicación: " + (numero1 * numero2) + "<br/>");
    document.write("División: " + (numero1 / numero2) + "<br/>");
    document.write("****************************" + "<br/>");
}

function calculadora(numero1, numero2, mostrar = false) {
    // Conjunto de instrucciones a ejecutar

    if (mostrar == false) {
        porConsola(numero1, numero2);
    } else {
        porPantalla(numero1, numero2);
    }

    return "Hola soy la calculadora!!";
}

// Invocar o llamar a la función
for (var i = 1; i <= 10; i++) {
    console.log(i);
    calculadora(i, 8, true);
}