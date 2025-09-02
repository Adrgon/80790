/* 
const obj = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    saludar: function() {
        console.log("Hola")
    }
}

console.log(obj)

obj.curso = "javascript"
console.log(obj);
 */

function Cliente(primero, segundo){
    this.nombre = primero,
    this.saldo = segundo,
    this.saludo = function(){
        console.log("Hola")
    },
    this.saludoPersonalizado = function(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.saldo} en mi cuenta.`);
    },
    this.retirarDinero =  function(){}
    this.depositar = function(){}
}

Cliente.prototype.tipoCliente = function(){
    let tipo;
    if(this.saldo > 10000){
        tipo = "Gold"
    }else if(this.saldo > 5000){
        tipo = "Platinum"
    }else {
        tipo = "Normal"
    }
    return tipo;
}

const cliente1 = new Cliente("Raul", 250);
console.log(cliente1)
console.log(cliente1.tipoCliente())

const cliente2 = new Cliente("Juan", 500);
console.log(cliente2);
const cliente3 = new Cliente("Mateo", 1500);
console.log(cliente3);

/* {
    nombre: "Juan"
    saldo: 500
} */

cliente2.saldo = 250

console.log(cliente2);
console.log(cliente1.saludo());
console.log(cliente1.saludoPersonalizado());
console.log(cliente2.saludo());
console.log(cliente2.saludoPersonalizado());
console.log(cliente3.saludo());
console.log(cliente3.saludoPersonalizado())
