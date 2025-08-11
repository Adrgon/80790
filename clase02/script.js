// conteo
/* para(valor; valor < numero; valor = valor + 1){

} */

/* for(let i=1; i < 10; i+=1){
    console.log("valor de i = " + i)
}
console.log("------------------------")
for (let i = 0; i < 10; i += 1) {
  console.log("valor de i = " + i);
}

console.log("------------------------");
for (let i = 0; i <= 10; i += 1) {
  console.log("valor de i = " + i);
}


console.log("------------------------");
for (let i = 0; i <= 10; i += 1) {
    if(i === 5){
        //console.log("llego a 5, no lo muestro");
        continue; // salta a la siguiente iteracion
    }
  console.log("valor de i = " + i);
}

console.log("------------------------");
for (let i = 0; i <= 10; i += 1) {
  if (i === 5) {
    //console.log("llego a 5, no lo muestro");
    break; // salta a la siguiente iteracion
  }
  console.log("valor de i = " + i);
}
 */
/* let a = 5
// stack overflow
// condicion
while(a < 10){
console.log("valor de a = " + a)
    a += 1
} */

/* let el = "ESCAPE"
while( el != "ESCAPE"){
    el = prompt("Ingresar dato")
    console.log(el)
}
console.log("fin del ciclo") */


/* let el = "ESCAPE";
do {
  el = prompt("Ingresar dato");
  console.log(el);
} while (el != "ESCAPE");


console.log("fin del ciclo"); */


let tabla = Number(prompt("Ingresar tabla de multiplicar"));
for(let i = 1; i < 10; i+=1){
    console.log(i + " X " + tabla + " = " + (i * tabla))
}
