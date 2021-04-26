// Esercizio con if

// Generare un numero da 1 a 6 per l'utente
var playerDie = Math.floor(Math.random() * 6) +1;
document.getElementById("player_roll").innerHTML = playerDie;

// Generare un numero da 1 a 6 per il Pc
var pcDie = Math.floor(Math.random() * 6) +1;
document.getElementById("pc_roll").innerHTML = pcDie;

// Stabilire il vincitore in base al punteggio più alto

var victoryMsg = document.getElementById("victory_msg");

if (playerDie == pcDie){
    victoryMsg.innerHTML = "Pareggio!";
    
} else if (playerDie > pcDie) {
    victoryMsg.innerHTML = "Hai vinto!";

} else if (playerDie < pcDie){
    victoryMsg.innerHTML = "Il Pc ha vinto!";
}



// Esercizio con switch

// Generare un numero da 1 a 6 per l'utente
var playerRoll = Math.floor(Math.random() *6) +1;
document.getElementById("player_2_roll").innerHTML = playerRoll;

// Generare un numero da 1 a 6 per il Pc
var pcRoll = Math.floor(Math.random() *6) +1;
document.getElementById("pc_2_roll").innerHTML = pcRoll;

// Stabilire il vincitore in base al punteggio più alto
var victoryMsg2 = document.getElementById("victory_msg_2");

switch(true){

    case playerRoll > pcRoll:
        victoryMsg2.innerHTML = "Hai vinto!";
        break;

    case playerRoll == pcRoll:
        victoryMsg2.innerHTML = "Pareggio!";
        break;

    case playerRoll < pcRoll:
        victoryMsg2.innerHTML = "Il Pc ha vinto!";
        break;
}