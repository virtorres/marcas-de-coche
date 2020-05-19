/* Preguntaremos al usuario su nombre y las marcas de sus tres primeros coches
El nombre y las marcas se verán tanto en la pantalla del navegador como en la consola
Para ello vamos a utilizar un prompt para que almacene la información
------------------------------------------------
*/

/* Vamos a crear un script aunque no es lo más recomendable y después hacemos las variables
Después daremos la orden para que se vea en el navegador y en consola
*/

//Primero un script en el que pedimos el nombre del/a usuario/a

var nombre = "Por favor, dinos tu nombre y apellidos";

document.write(`Nombre completo ${nombre}`);
console.log(`Nombre completo ${nombre}`);

//Ahora le pedimos la marca de su primer coche 

var marca1 = "Dinos la marca, modelo y año de tu primer coche, separado por comas";

document.write(`${marca1}`);
console.log(`${marca1}`);

//Script con la marca de su segundo coche 

var marca2 = "¿Cuáles son los datos de tu segundo coche?";

document.write(`Datos del segundo coche ${marca2}`);
console.log(`Datos del segundo coche ${marca2}`);

//Script con la marca de su tercer coche 

var marca3 = "Por último, ¿cuáles son los datos de tu tercer coche?";

document.write(`Datos del tercer coche ${marca3}`);
console.log(`Datos del tercer coche ${marca3}`);