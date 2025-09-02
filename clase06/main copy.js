//alert()

/* function cualquiera(){
    console.log("hola")
}

console.log(cualquiera)
console.log(typeof cualquiera)

cualquiera() */

/* const otra = function(){
    console.log("hola")
}

otra() */


function saludar(nombre){
    console.log("Hola! " + nombre)
}



// Las funciones que reciben una funcion como parametro se llaman hight order function

function ejecutarAccion(callback){
    console.log("Ejeccutamos accion....")
    callback("Martin")
}

ejecutarAccion(saludar)
