//defer = le dice al stack que no se ejecute hasta que no se cargue todo body

function saludar(){
    console.log("Buen comienzo...")

} 

saludar()

function hacerSandwich(){
    console.log("-------------------------")
    console.log("Primera tapa de pan");
    console.log("agregamos jamon ");
    console.log("agregamos queso");
    console.log("Segunda tapa de pan")
    console.log("-------------------------");
}

hacerSandwich()
saludar()
hacerSandwich()
console.log("salgo correr")
hacerSandwich()
