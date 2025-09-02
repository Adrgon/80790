const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

const carrito = [
  { nombre: "Camisa", precio: 50, cantidad: 0 },
  { nombre: "Pantalón", precio: 80, cantidad: 0 },
  { nombre: "Zapatos", precio: 120, cantidad: 0 },
];


/* 
const existe = meses.includes("Enero")
console.log(existe)
*/

// ES6 Nos ofrece una serie de metodos diferentes. 
/* const existe2 = meses.some( mes => mes === "Enero")
console.log(existe2) */

const existeEnCarrito = carrito.some( item => item.nombre == "Pelota")
console.log(existeEnCarrito)
