/* let resAlert = alert("hola")
let resPrompt = prompt("Ingresar algo")

console.log(resAlert)
console.log(resPrompt) */


/* function sumar(num1, num2){
    console.log(num1 + num2)
}

function multiplicar(num1, num2) {
    return num1*num2
}

let restultado = sumar(5,10)
console.log(restultado)

restultado = multiplicar(2,5)
console.log(restultado) */


function login(usr, pass) {
  if (usr === "admin" && pass === "1234") {
    //console.log(usr + " ha iniciacio session");
    return true;
  } else {
    //alert("login incorrecto");
    return false
    //iniciarApp();
  }
}
function iniciarApp() {
  console.log("Iniciar App");
  let usr = prompt("Ingresar usuario");
  let pass = prompt("Ingresar password");
  let res = login(usr, pass);
  if(res === true){
    console.log("usuario logueado")
  }else {
    console.log("login incorrecto")
  }
}

iniciarApp();
