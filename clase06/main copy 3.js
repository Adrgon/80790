const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Diciembre"];

function existe(mes){
    if(mes === "Diciembre"){
        console.log("El mes de diciembre existe")
    }else {
        console.log("No se encontro el mes de Diciembre")
    }
}

const existe2 = mes => {
    if (mes === "Diciembre") {
      console.log("El mes de diciembre existe");
    }
}

//existe('Diciembre')
/* for(let mes of meses){
    existe(mes)
} */


//meses.forEach(existe)
/* meses.forEach(function(mes){
    if (mes === "Diciembre") {
      console.log("El mes de diciembre existe");
    }
})
 */


//meses.forEach(existe2)
meses.forEach( mes => {
    if (mes === "Diciembre") {
      console.log("El mes de diciembre existe");
    }
})

// definicion general de funciones
//function nombreFuncion(){}
// cuando las envie como parametros
//const nombreFuncion2 = ()=>{}
