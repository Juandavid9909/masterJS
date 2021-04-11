'use strict';

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

peliculas.sort();
peliculas.reverse();

console.log(peliculas);

var cine = [categorias, peliculas];

// console.log(cine[0][1]);

peliculas.push("Batman");
peliculas.pop();

var indice = peliculas.indexOf("Gran Torino");

if (indice > -1) {
    peliculas.splice(indice, 1);
}

// Convertir array a texto
var peliculas_string = peliculas.join();

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(peliculas_string);