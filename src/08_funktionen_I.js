/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call
// test();

// Funktionsrumpf | callee
// Funktionsdekleration
// function test()
// {
//     console.log("Hallo, Peter!")    
// }

// /***** Funktionen 02a *****/
// // 2a. Parametrisierung + Datenübergabe von INNEN

// // ausgabeNamen(); // call

// function ausgabeNamen() {
//     // interne Variable | What happe nd in VEGAS
//     let firstName = "Peter"
//     console.log("Hallo, " + firstName + "!");
// }

// // console.log("Hallo, " + firstName + "!"); // Fehler : scope!

// /***** Funktionen 02b *****/
// // 2b. Parametrisierung + Datenübergabe von AUSSEN

// // ausgabeNamen2("Falk")
// // ausgabeNamen2("Peter")1
// // ausgabeNamen2("Maria")

// function ausgabeNamen2(firstName) {
//     console.log("Hallo, " + firstName + "!"); 
// }

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente


// const prompt = require('prompt-sync')({sigint: true});
// ausgabeNamenParams(prompt("Vorname: "),prompt("Nachname:")); // Piping
// ausgabeNamenParams("Max","Mütze")

// function ausgabeNamenParams(firstName, secondName) {
//     console.log("Hallo, " + firstName + " " + secondName + "!");
// }

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenSRP("Max","Mütze")

// function ausgabeNamenSRP(firstName, secondName) {

//         // 1. Funktionalität: string composing
//     let GAP = " ";
//     let outputStr = "Hallo, " + firstName + " " + secondName + "!"

//         // 2. Funktionalität: string output
//     console.log(outputStr);    
// }


/***** Funktionen 03b *****/

// 1. Funktionalität: string composing
output(getString("Max","Mütze"))

function getString(firstName, secondName) {
    let GAP = " ";
    let outputStr = "Hallo," + GAP + firstName + GAP + secondName + "!"
    return outputStr; // return schickt die Daten an den Call ...
    console.log("Hi") // return beendet die Funktion
}
function output(outputData) {
    console.log(outputData);
}