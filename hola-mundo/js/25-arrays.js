'use strict';

// Arrays, Arreglos, Matrices

var nombre = "Victor Robles";
var nombres = ["Victor Robles", "Juan Lopez", "Manolo Garcia", "Jose Martin", 52, true];

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

/*
var elemento = parseInt(prompt("Que elemento del array quieres??", 0));
if(elemento >= nombres.length) {
    alert("Introduce el numero correcto menor que " + nombres.length);
}
else {
    alert("El usuario seleccionado es: " + nombres[elemento]);
}
*/

document.write("<h1>Lenguajes de programación del 2020</h1>");
document.write("<ul>");

// for (var i = 0; i < lenguajes.length; i++) {
//     document.write("<li>" + lenguajes[i] + "</li>");
// }

lenguajes.forEach((elemento, indice, arr) => {
    console.log(arr);
    document.write("<li>" + indice + " - " + elemento + "</li>");
});

for (let lenguaje in lenguajes) {
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

document.write("</ul>");


// Busquedas
var precios = [10, 20, 50, 80, 12];

// var busqueda = lenguajes.find(lenguaje => lenguaje == "Php");
var busqueda = precios.some(precio => precio >= 20);

console.log(busqueda);