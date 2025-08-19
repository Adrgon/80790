//alert()
const cancionesObjetos = [];


function agregarCancionObjeto(){
    console.log("agregarCacionObjeto")
    const titulo = prompt("Ingrese el título de la canción:");
    const artista = prompt("Ingrese el artista de la canción:");
    const duracion = Number(prompt("Ingrese la duración de la canción (en segundos):"));
    if(titulo && artista && !isNaN(duracion)){
        cancionesObjetos.push({titulo, artista, duracion})
        alert('Cancion agregada')
    }
}


function mostrarListaObjetos(){
  if (cancionesObjetos.length === 0) {
    alert("No hay canciones.");
    return;
  }
  let salida = "Lista de canciones (detallada):\n";
  for (let i = 0; i < cancionesObjetos.length; i++) {
    const c = cancionesObjetos[i];
    salida +=
      i + 1 + ". " + c.titulo + " - " + c.artista + " (" + c.duracion + "s)\n";
  }
  alert(salida);
  console.log("Lista objetos:", cancionesObjetos);
}
function buscarEnObjetos(){
const titulo = prompt("Ingrese el título a buscar:");
if (!titulo) return;
let encontrada;
for (let i = 0; i < cancionesObjetos.length; i++) {
  if (cancionesObjetos[i].titulo === titulo) {
    encontrada = cancionesObjetos[i];
    break;
  }
}
if (encontrada) {
  alert(
    "Canción: " +
      encontrada.titulo +
      " - " +
      encontrada.artista +
      " (" +
      encontrada.duracion +
      "s)"
  );
} else {
  alert("No encontrada.");
}

}
function mostrarLargas(){
    let salida = "Canciones largas (>300s):\n";
    let hay = false;
    for (let i = 0; i < cancionesObjetos.length; i++) {
      if (cancionesObjetos[i].duracion > 300) {
        const c = cancionesObjetos[i];
        salida += c.titulo + " - " + c.artista + " (" + c.duracion + "s)\n";
        hay = true;
      }
    }
    if (!hay) salida += "Ninguna.";
    alert(salida);
}


function menuObjetos(){
    let opcion;
    do {
        opcion = prompt(
          "Canciones como Objetos\n" +
            "1. Agregar canción\n" +
            "2. Mostrar lista\n" +
            "3. Buscar canción por título\n" +
            "4. Mostrar canciones largas (>300s)\n" +
            "5. Salir"
        );
        switch(opcion){
            case '1':
                agregarCancionObjeto();
                break;
            case '2':
                mostrarListaObjetos();
                break;
            case '3':
                buscarEnObjetos();
                break;
            case '4':
                mostrarLargas();
                break;
            case '5':
                alert("Hasta luego");
                break;
            default:
                alert("Opción no válida");
        }
    }while(opcion != '5');
}

menuObjetos()
