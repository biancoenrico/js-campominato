/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

var bombe = [];

var numeri = 100;
var numeroBombe = 16;


while(bombe.length < numeroBombe) {

    var numeroGenerato = generaBomba(numeri);

    if (bombe.includes(numeroGenerato) == false) {

        bombe.push(numeroGenerato);
    }
}

var numeriInseriti = [];
var bombaTrovata = false;

while(numeriInseriti.length < (numeri - numeroBombe) && bombaTrovata == false) {

    var numeroUtente = parseInt(prompt('Inserisci numero'));

    // il numero è una bomba?
    var isNumeroBomba = isBombaTrovata(numeroUtente, bombe);

    if (isNumeroBomba == false) {

        if (numeriInseriti.includes(numeroUtente) == false) {

            numeriInseriti.push(numeroUtente);

        } else {

            alert('il numero è già presente');
        }

    } else {

        alert('Hai trovato una bomba');
        bombaTrovata = true;
    }

}

var totaleNumeriInseriti = numeriInseriti.length;

var messaggio = '';

if (bombaTrovata == true) {

    messaggio = 'perso';

} else {

    messaggio = 'vinto';
}

alert('hai ' + messaggio + '!! Punteggio ottenuto : ' + totaleNumeriInseriti); 

// funzioni
// 
// funzione per generare numeri random tra 1 e 100
function generaBomba(max) {

    return Math.floor(Math.random() * max) + 1;
}

// 
// funzione per capire se un numero inserito dall'utente é una bomba
function isBombaTrovata(numeroInserito, listaBombe) {

    var found = false;

    var i = 0;

    while(i < listaBombe.length && found == false) {

        var numeroArray = listaBombe[i];

        if (numeroInserito == numeroArray) {

            found = true;
        }  

        i++;

    }

    return found;
}