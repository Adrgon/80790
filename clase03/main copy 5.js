// parametros
/* function comer(comida){
    if(comida == undefined){
        console.log("no hay comida")
    }else {
        console.log("Estoy comiendo " + comida)
    }
} */

function comer(comida = "nada") {
    console.log("Estoy comiendo " + comida);
  }

function comer(nombre = "Alguien", comida = "nada") {
  console.log(nombre + " come " + comida);
}



comer("Raul","milanesas")
comer();
