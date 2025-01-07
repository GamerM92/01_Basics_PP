/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

const prompt = require('prompt-sync')({sigint: true});

const name = prompt("Gib einen Namen ein: ");
let age = Number(prompt("Gib einen Beruf ein: "));


if (age > 0 & age < 6);
{
    console.log(name + " trinkt Milch");
}
// else if (age < 12);
// {
//     console.log(name + " trinkt Saft");
// }



