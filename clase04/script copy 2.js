// 1. Creación de un array simple: lista de canciones
console.log("1. Array simple de canciones:");
const canciones = ["Rayando el sol", "La Flaca", "Caraluna"];
console.log(canciones);
console.table(canciones)
console.log("-----------------------------");

/* let cancion1 = "Rayando el sol"
let cancion2 = "La Flaca"
let cancion3 = "Caraluna" */

console.log(canciones[0]); // Rayando el sol
console.log(canciones[1]); // La Flaca
console.log(canciones[2]); // Caraluna

for(let i=0; i<3; i+=1){
    console.log(`${i + 1}. ${canciones[i]}`);
}
console.log("------------------------------------")
for (let i = 0; i < canciones.length; i += 1) {
  console.log(`${i + 1}. ${canciones[i]}`);
}

//console.log(`El ultimo elemento de un array ${canciones.length - 1}`);

// Métodos simples de array
console.log("3. Métodos clásicos de array:");
canciones.push("Tabaco y Chanel"); // Agrega al final
console.log("push (agrega al final):", canciones);
console.table(canciones)
// pop
canciones.pop(); // Elimina el último
console.log("pop (elimina el último):", canciones);
console.table(canciones)

canciones.unshift("Me Vale"); // Agrega al inicio
console.log("unshift (agrega al inicio):", canciones);
console.table(canciones)
canciones.shift(); // Elimina el primero
console.log("shift (elimina el primero):", canciones);
console.table(canciones)

const copia = canciones.slice(0, 3); // Copia parte del array
console.table(canciones);
console.table(copia)

canciones.splice(1, 1, "Depende");
console.table(canciones)

// indexOf: obtener la posición de un elemento
const indiceDepende = canciones.indexOf('Depende');
console.log('indexOf (posición de "Depende"):', indiceDepende);
// join: unir todos los elementos en un string
const cancionesUnidas = canciones.join(' , ');
console.log('join (une con " , "):', cancionesUnidas);
console.log(typeof cancionesUnidas)
// includes: verificar si existe un elemento
const tieneFlaca = canciones.includes('Depende');
console.log('includes (¿está "La Flaca"?):', tieneFlaca);
console.log('-----------------------------');
