/* Scelta tra pari o dispari */
let scelta = prompt("pari o dispari??");
console.log("Hai scelto " + scelta)

/* Blocco programma se i valori sono diversi da pari o dispari */
while (scelta.toLowerCase () != "pari" && scelta.toLowerCase () != "dispari") {
    scelta = prompt("Il valore che hai scelto è sbagliato!! Pari o dispari??")
}

/* Scelta di un numero da 1 a 5 */
let numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));
console.log("Il tuo numero è " + numeroUtente)
document.getElementById('numero-player').innerHTML = numeroUtente;

/* Validità numero inserito */
while (isNaN(numeroUtente) || numeroUtente > 5) {
    numeroUtente = parseInt(prompt("Il valore che hai inserito non è valido! inserisci un numero da 1 a 5"));
}

/* Genero un numero casuale per il computer */
let numeroPC = Math.floor(Math.random()*5) + 1;
console.log("Il numero del pc è " + numeroPC)
document.getElementById('numero-computer').innerHTML = numeroPC;

/* Somma dei due numeri */
let somma = numeroUtente + numeroPC;
console.log("La somma dei due numeri è " + somma)

/* Funzione per valutare se la somma dei due numeri è pari o dispari */
function Game(number){

    let pariDispari = "";

    let vincitore = false;

    /* verifica se il numero è pari o dispari */
    if (number % 2 == 0) {
        pariDispari = "pari"
    } else {
        pariDispari = "dispari"
    }

    /* Confronto tra la scelta dell'utente e il risultato */
    if (scelta == pariDispari) {
        vincitore = true;
    } else {
        vincitore = false;
    }
    
    return vincitore;
}

let risultato = Game();

if (Game() == true) {
    document.getElementById('risultato').innerHTML = "Hai vinto!!!";
} else {
    document.getElementById('risultato').innerHTML = "Hai perso...";
}


