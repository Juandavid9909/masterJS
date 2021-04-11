'use strict';

// Pruebas con let y var

// Prueba con var
var numero = 40;

if (true) {
    var numero = 50;
    console.log(numero);
}

console.log(numero);

// Prueba con let
var texto = "Curso JS";
console.log(texto);

if (true) {
    let texto = "Curso Laravel 5";
    console.log(texto);
}

console.log(texto);