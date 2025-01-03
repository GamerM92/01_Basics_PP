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
const zahl1 = Number(prompt("Geben Sie die erste Zahl ein: "));
const zahl2 = Number(prompt("Geben Sie die zweite Zahl ein: "));
console.log("");
const Summe = zahl1 + zahl2

if (isNaN(Summe)) {
    console.log("Ein ungültiges Zeichen wurde eingegeben");
}
else {
console.log("Die Summe von " + zahl1 + " und " + zahl2 + " ist " + Summe);
}