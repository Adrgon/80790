const cancion = {
  titulo: "La Flaca",
  artista: "Jarabe de Palo",
  duracion: 210,
  year: 1998,
  genero: "Pop latino"
};
const tituloCanciones = ["Rayando el sol", "La Flaca", "Caraluna"];

// Combinacion de arrays con objetos

const listaCanciones = [
  { titulo: "Rayando el sol", artista: "Maná", duracion: 240 },
  { titulo: "La Flaca", artista: "Jarabe de Palo", duracion: 210 },
  { titulo: "Caraluna", artista: "Bacilos", duracion: 330 },
  { titulo: "Oye mi amor", artista: "Maná", duracion: 220 },
  { titulo: "Tabaco y Chanel", artista: "Bacilos", duracion: 350 },
  { titulo: "Depende", artista: "Jarabe de Palo", duracion: 200 },
];

for(let i=0; i < listaCanciones.length; i+=1){
    const cancion = listaCanciones[i];
    console.log(`${i+1}. ${cancion.titulo} - ${cancion.artista} - ${cancion.duracion}`)
}
console.log('----------------')

let contador = 1;
for(const cancion of listaCanciones){
    console.log(`${contador} - ${cancion.titulo} - ${cancion.artista}`);
    contador += 1;
}


console.log("--------------------")
// Buscar la primera canción de Bacilos (sin usar find)
let cancionBacilos;
for (let i = 0; i < listaCanciones.length; i++) {
  if (listaCanciones[i].artista === 'Bacilos') {
    cancionBacilos = listaCanciones[i].titulo;
    break;
  }
}
console.log('Primera canción de Bacilos:', cancionBacilos);

console.log('--------------------')

// Listar canciones de más de 300 segundos (sin usar filter)
console.log('Canciones de más de 300 segundos:');
for (let i = 0; i < listaCanciones.length; i++) {
  if (listaCanciones[i].duracion > 300) {
    console.log(listaCanciones[i]);
  }
}
