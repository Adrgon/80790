// funciones que retornan o devuelven una function
function crearFuncionDeSaludo(tipoSaludo){
    return function(nombre){
        console.log(tipoSaludo + " " + nombre)
    }
}

const sayHello = crearFuncionDeSaludo("Hello");
const decirHola = crearFuncionDeSaludo("Hola");
const sayBye = crearFuncionDeSaludo("Bye");
const decirAdios = crearFuncionDeSaludo("Adios")


decirHola("Mateo");
sayHello("Mateo")
decirAdios("Lionel")
sayBye("Fernando")

// cuando tenemos una hight order function: cuando tenemos una funcion que reciber una funcion como parametro o cualdo devolvemos o retornamos una funcion. 
