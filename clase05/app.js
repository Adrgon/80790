//TLS: Top level domain
//console.log(window)
//window.alert("hola")
console.log(localStorage)
/* localStorage.setItem("nombre", "Noelia");
localStorage.setItem("edad", 30);
localStorage.setItem("estudia", true);
localStorage.setItem("cursos", ["web", "javascript"])
localStorage.setItem("datos", {id: 123445, presentismo: true})

sessionStorage.setItem("nombre", "Noelia");
sessionStorage.setItem("edad", 30);
sessionStorage.setItem("estudia", true);
sessionStorage.setItem("cursos", ["web", "javascript"]);*/
//localStorage.setItem("datos", JSON.stringify({ id: 123445, presentismo: true })); 


let nombre = localStorage.getItem("nombre");
let edad = parseFloat(localStorage.getItem("edad"));
let estudia = localStorage.getItem("estudia") === "true";
let cursos = localStorage.getItem("cursos").split(',');
let datos = JSON.parse(localStorage.getItem("datos"));

console.log(nombre);
console.log(typeof nombre);
console.log(edad);
console.log(typeof edad);
console.log(estudia);
console.log(typeof estudia);
console.log(cursos);
console.log(cursos[0])
console.log(typeof cursos);
console.log(datos);
console.log(datos.id)
console.log(typeof datos);


localStorage.removeItem("edad");
localStorage.clear();
