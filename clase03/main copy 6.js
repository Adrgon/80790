
function login (usr, pass){
    if(usr === "admin" && pass==="1234"){
        console.log(usr + " ha iniciacio session")
        
    }else {
        alert("login incorrecto")
        iniciarApp()
    }
}
function iniciarApp(){
    console.log('Iniciar App')
    let usr = prompt("Ingresar usuario")
    let pass = prompt("Ingresar password")
    login(usr, pass)
}

iniciarApp()
