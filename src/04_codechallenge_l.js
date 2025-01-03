// console.log("Hi");

/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

// Zahleneingabe
console.log("");
var zahl = Number(prompt("Geben Sie die erste Zahl ein: "));
const a = zahl;
var zahl = Number(prompt("Geben Sie die zweite Zahl ein: "));
const b = zahl;

// Berechnung der Summe von a und b
console.log("");
const summe = a + b

// Überprüfung ob Summe
if (isNaN(summe)) {
    console.log("Ein ungültiges Zeichen wurde eingegeben");
}
else {
console.log("Die Summe von " + a + " und " + b + " ist " + summe);
}
console.log("");