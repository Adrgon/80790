
// goky vs superman

const MIN_POWER = 10;
const MAX_POWER = 30;

let energiaGoku = 100;
let energiaSuperman = 100;

let round = 0;

while(energiaGoku > 0 && energiaSuperman > 0) {
   //round +=1
   round++;
    console.log("Round " + round)
    let golpeGoku = parseInt(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
  let golpeSuperman = parseInt(
    Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER
  );

  if (golpeGoku === golpeSuperman) {
    console.log("Empate");
  } else if (golpeGoku > golpeSuperman) {
    console.log("Goku golpe con un fuerza de " + golpeGoku);
    //energiaSuperman = energiaSuperma - golpeGoku;
    energiaSuperman -= golpeGoku;
  } else {
    console.log("Superman golpe con un fuerza de " + golpeSuperman);
    //energiaSuperman = energiaSuperma - golpeGoku;
    energiaGoku -= golpeSuperman;
  }
  console.log("------------------------------------------")
}

if(energiaGoku > energiaSuperman) {
    console.log("Ganador Goku")
}else {
    console.log("Ganador Superman")
}
