/* Preguntaremos al usuario su nombre y las marcas de sus tres primeros coches
El nombre y las marcas se verán tanto en la pantalla del navegador como en la consola
Para ello vamos a utilizar un prompt para que almacene la información
------------------------------------------------
*/

/* Vamos a crear un script aunque no es lo más recomendable y después hacemos las variables
Después daremos la orden para que se vea en el navegador y en consola
*/

<script type="text/javascript">

var nombre = name(prompt("Por favor, dime tu nombre"));
var marca1 = marca(prompt("¿Cuál era la marca de tu primer coche?"));
var marca2 = marca(prompt("¿Cuál era la marca de tu segundo coche?"));
var marca3 = marca(prompt("¿Cuál era la marca de tu tercer coche?"));

document.write(`nombre = ${name}, marca del primer coche = ${marca1}, marca del segundo coche = ${marca2}, y marca del tercer coche = ${marca3}`);
console.log(`nombre = ${name}, marca del primer coche = ${marca1}, marca del segundo coche = ${marca2}, y marca del tercer coche = ${marca3}`);

</script>