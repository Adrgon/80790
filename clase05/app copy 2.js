

class Cliente { // Nombre debe ser en Mayusculas.. Class Declaration
    constructor(n, s){
        this.nombre = n;
        this.saldo = s;
    }
    consultarSaldo() {
        return `Hola ${this.nombre}, tu saldo es ${this.saldo}`
    }

    retirar(cantidad) {
        this.saldo -= cantidad
    }

    static bienvenida(){
        return 'Bienvenido a nuestro Banco '
    }
}

let cliente1 = new Cliente("Ali", 500);
let cliente2 = new Cliente("Renzo", 1500)

console.log(cliente1);

console.log(cliente1.nombre);
console.log(cliente1.consultarSaldo())
cliente1.retirar(100)
console.log(cliente1.consultarSaldo())

console.log(Cliente.bienvenida())
