'use strict';

// Transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
var texto2 = "es muy buen curso";

var dato = numero.toString();
dato = texto1.toLowerCase();
dato = texto2.toUpperCase;

// Calcular longitod
var nombre = "Victor Robles";

// console.log(nombre.length);

// Concatenar - Unir textos
// var textoTotal = texto1 + " " + texto2;
var textoTotal = texto1.concat(" " + texto2);

console.log(textoTotal);

var busqueda = texto1.indexOf("JavaScript");
busqueda = texto1.lastIndexOf("JavaScript");
busqueda = texto1.search("JavaScript");
busqueda = texto1.match("JavaScript");
busqueda = texto1.substr(14, 5);
busqueda = texto1.charAt(44);
busqueda = texto1.startsWith("Bi");
busqueda = texto1.endsWith("Victor Robles");
busqueda = texto1.includes("JavaScript");
busqueda = texto1.replace("JavaScript", "Symfony");
busqueda = texto1.slice(14, 22); // Segundo valor opcional
busqueda = texto1.split(" ");
busqueda = texto1.trim();
console.log(busqueda);