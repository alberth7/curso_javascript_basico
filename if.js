function esPar(numero){
    return numero % 2 === 0 ? "Es par" : "No es par"
}

esPar(2) // "Es par"
esPar(3) // "No es par"


// ejercicios

function game(pc, jugador){
    if (pc === jugador){
        console.log("Empate");
    }
    else if ((pc == "papel" && jugador == "piedra" ) || (pc == "piedra" && jugador == "tigera" ) || (pc == "tigera" && jugador == "papel" ) )
    {
        console.log("Gano la PC");
    }
    else{
        console.log("Ganaste");
    }
}

const tickTackToe = ['piedra','papel','tigera'];
const random = Math.floor(Math.random() * tickTackToe.length);
let pc = tickTackToe[random];
let jugador = 'piedra';

console.log(`>>> PC ${pc}`);
console.log(`>>> Tu ${jugador}`)
game(pc, jugador);






