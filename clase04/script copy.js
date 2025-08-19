//alert()
// 0 Ejemplos basicos de arrays
console.log("Ejemplo: array vacío");
const vacio = [];
console.log(vacio); 

console.log("Ejemplo: array de strings");
const nombres = ["Ana", "Luis", "Sofía"];
console.log(nombres); //

console.log("Ejemplo: array de números");
const numeros = [10, 20, 30, 40];
console.log(numeros);

console.log("Ejemplo: array mixto");
const mixto = [1, "dos", true, null];
console.log(mixto);

console.log("Ejemplo: array de emojis");
const emojis = ["🎵", "🎸", "🥁", "🎤"];
console.log(emojis);
console.log("-----------------------------");
console.log(typeof emojis);


console.log("copia por valor")
let a = 10;
let b = a
console.log(a); // 10
console.log(b); // 10

b = 20
console.log(a); // 10
console.log(b); // 20
console.log("-------------")

//copia por referencia
console.log("copia por referencia")
const arr1 = [10,20]
const arr2 = arr1

console.log(arr1) // 10, 20
console.log(arr2) // 10, 20
console.log("-------------------------");
arr2[0] = 50
console.log("arr1" + arr1) // 10,20
console.log("arr2" + arr2) // 50, 20
console.log("-------------------------")
arr2 = []
console.log(arr1); // 10,20
console.log(arr2); // 20,30
