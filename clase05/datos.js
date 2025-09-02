//Primitivos
//string
//number
//booleanos

// especiales
//null
//undefined

//Complejos - Evolucionados
//Array
//Objets
//Funciones

/*------ Copia por valor -------*/
/* let a = 10;
let b = a;

b = 5
b = 8

a = 7


let tita = 5
let ema = tita

tita = tita - 3
console.log(tita)
console.log(ema)

ema = ema + 5
console.log(ema)
console.log(tita)
 */




// variables son cajas que se guardan en espacios de memoria
// a la variable b le estamos asignando el 10
// cada vez que cambie el valor de b solo va a estar cambiando valor de b
// el valor de a se va a mantener como estaba
// cambio el valor de a solo cambio el valor de a el de b queda como estba. 

//const c = 10
//const d = c

//c = 15 // da error por que los valores no pueden cambiar son constantes
//d = 8 // da error

// Tipos de datos complejos (Copia por referencias)
//Referencias (direcciones de memoria)
let obj1 = { x: 10, y: 5 }; // suponemos que la direcciond e moemora 0xf6667d los valores se guardan en las direcciones de momoria
let obj2 = obj1

obj2.x = 1
console.log(obj1)
console.log(obj2)

console.log(document.querySelector('h1'))
let encabezado = document.querySelector('h1')
console.log(encabezado);
encabezado.textContent = "Mi pagina personal"
console.log(document.querySelector("h1").textContent);
console.log(encabezado.textContent);


//
const a1 = {a:1, b:5} // 0xff789f3245
a1 = {} // 0xff689d3245
a1.a = 10;
console.log(a1)


// El valor de los primitivos son los valores
// Valor de los complejos son las direcciones de momoria
// En una constante no se puede modicar ni el valor del primitivo ni la direccion de memoria del complejo
