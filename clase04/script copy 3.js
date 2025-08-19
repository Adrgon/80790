console.log('Objeto de canción')

/* 
let nombreCancion = "La Flaca"
let artistaCancion = "Jarabe de Palo"
let duracionCancion = 210;
 */

const cancion = {
  titulo: "La Flaca",
  artista: "Jarabe de Palo",
  duracion: 210,
};
console.log(cancion);
console.log(typeof cancion);
//console.table(cancion)
// Manejo de propiedades del objeto
console.log(cancion.titulo)
console.log(cancion['artista'])

cancion['duracion'] = 200;

console.log(cancion)
cancion.year = 1998;
cancion['genero'] = 'Pop latino'
console.log(cancion);
