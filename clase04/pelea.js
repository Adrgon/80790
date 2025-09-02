/* Valores constantes que representan el poder mínimo y máximo
 que puede tener un golpe durante la pelea. */
const MIN_POWER = 10;
const MAX_POWER = 30;

/* Energía inicial de cada luchador. Cuando la energía llega a 0
 o menos, el luchador queda derrotado. */
let energiaGoku = 100;
let energiaSuperman = 100;

/* calcularGolpe(max, min)
 - Devuelve un entero aleatorio entre `min` (incluido) y `max` (excluido)
 - Usa Math.random() para generar un número flotante en [0, 1) y lo escala
   al rango (max - min) antes de sumarle `min`.
 - Se usa parseInt para convertir el resultado a entero (corta la parte decimal).
 Nota para alumnos: si llamamos a esta función sin pasar `max` y `min`,
 los parámetros serán `undefined` y el cálculo dará NaN. En este ejemplo
 el código original llama a la función sin argumentos en un lugar — eso 
 provoca un comportamiento inesperado (ver más abajo). */
function calcularGolpe(max, min) {
  return parseInt(Math.random() * (max - min) + min);
}

// ambosSiguenVivos()
// - Comprueba si ambos luchadores todavía tienen energía positiva.
// - Devuelve true si los dos están por encima de 0, false en caso contrario.
function ambosSiguenVivos() {
  return energiaGoku > 0 && energiaSuperman > 0; // retorna un verdadero o falso
}

// gokuSigueVivo()
// - Determina si Goku tiene más energía que Superman al final de la pelea.
// - Se usa para declarar al ganador cuando termina el bucle principal.
function gokuSigueVivo() {
  return energiaGoku > energiaSuperman;
}

// renderizarResultado()
// - Muestra en consola el número de round y la energía actual de cada luchador.
// - Ayuda a seguir la evolución de la pelea paso a paso.
function renderizarResultado() {
  console.log("Round " + round);
  console.log("Energia de Goku " + energiaGoku);
  console.log("Energia de Superman " + energiaSuperman);
  console.log("-----------------------------");
}

// Llamada suelta a calcularGolpe: en el código original se invoca sin argumentos.
// Esto no tiene efecto útil y probablemente es un resto de pruebas; lo dejamos
// tal cual para no cambiar la lógica original, pero es un punto que los alumnos
// deben revisar y corregir si se desea un comportamiento consistente.
calcularGolpe();

// Contador de rondas (inicia en 0 y se incrementa en cada iteración del while).
let round = 0;

// Bucle principal: mientras ambos sigan con energía positiva, se generan golpes
// para cada uno y se aplica la lógica de daño.
while (ambosSiguenVivos()) {
  // Incrementa el número de round al empezar cada iteración.
  round = round + 1;

  // Golpe de Goku: aquí sí se pasan los límites MAX_POWER y MIN_POWER.
  // Esto produce un entero entre MIN_POWER (incluido) y MAX_POWER (excluido).
  let golpeGoku = calcularGolpe(MAX_POWER, MIN_POWER);

  // Golpe de Superman: en el código original se llama sin argumentos.
  // Eso hace que `golpeSuperman` sea NaN. Las comparaciones con NaN siempre
  // devuelven false, por lo que el flujo entrará en la rama `else` y
  // siempre se aplicará daño a Superman usando `golpeGoku`.
  // En una versión corregida deberíamos llamar a calcularGolpe(MAX_POWER, MIN_POWER)
  // también para Superman.
  let golpeSuperman = calcularGolpe();

  // Lógica de resolución del impacto:
  // - Si los golpes son exactamente iguales -> empate, nadie pierde energía.
  // - Si el golpe de Goku es menor que el de Superman -> Goku recibe daño.
  // - En cualquier otro caso -> Superman recibe daño.
  if (golpeGoku === golpeSuperman) {
    console.log("Empate, nadie pierde energia");
  } else if (golpeGoku < golpeSuperman) {
    // Superman ha hecho un golpe más fuerte, reduce la energía de Goku.
    energiaGoku = energiaGoku - golpeSuperman;
  } else {
    // Goku ha hecho el golpe más fuerte, reduce la energía de Superman.
    energiaSuperman = energiaSuperman - golpeGoku;
  }

  // Muestra el estado después de resolver el round.
  renderizarResultado();
}

// Al salir del bucle, uno de los luchadores tiene energía <= 0. Se decide
// el ganador comparando la energía restante (esto no considera empates
// exactos de energía, pero sigue la lógica original).
if (gokuSigueVivo()) {
  console.log("Ganador Goku");
} else {
  console.log("Ganador Superman");
}
