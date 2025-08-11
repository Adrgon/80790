// les estoy explicando que esto es javascript valido
1+1
"hola"
"1"
'mundo'
true

// esto es comentario

/*
esto es un comentario
de varias lineas
*/

// las variables sirven para guardar datos temporalmente
var nombre = "Adrian"; // es valido pero no lo usamos en el curso (var)
var nombre = "Leonardo"


let apellido = "Gonzalez"
//let apellido = "";
apellido = "Gomez"
let edad;
apellido = "Gonzalez"
edad = 49;

const PI = 3.14
//PI = 3.14

edad = 50;

// Salidas 
/* alert("hola mundo") // muestra un literal
alert(1) // muestra un numero
alert(1+4) // muestra el resultado de una operacion
alert(5*4) // muestra el resultado de una operacion
alert(edad) // muestra el contenido de una variable
alert(edad + 1) // muestra el resultado entre una variable y un numero
alert(nombre + apellido) // muestra el restultado entre dos variables
alert(nombre + " - " + apellido) // muestra el restultado de variables con literales con varibles */

console.log("hola mundo") // muestra un literal
console.log(1) // muestra un numero
console.log(1+4) // muestra el resultado de una operacion
console.log(5*4) // muestra el resultado de una operacion
console.log(edad) // muestra el contenido de una variable
console.log(edad + 1) // muestra el resultado entre una variable y un numero
console.log(nombre + apellido) // muestra el restultado entre dos variables
console.log(nombre + " - " + apellido) // muestra el restultado de variables con literales con varibles


// Entradas
let nom = prompt("ingresa tu nombre")
edad = prompt("ingresa tu edad")
alert("Ok entendi tu nombre es " + nom + " y tiene actualemente " + edad + " años");
