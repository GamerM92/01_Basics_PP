// Zeilenkommentar

/**
    Blockkommentar
 */

/***** Variablen 01 *******/

// console.log("Hi, du Kek!");
// console.log(Hi);

/* Deklaration + Wertzuweisung */

// let firstName; // Deklaration (Definition)
// firstName = "Max"; // Wertzuweisung | assignment
// console.log(firstName); // Ausgabe
// let familyName = "Mustermann"
// console.log(firstName, familyName);
// console.log("Hi, ich bin " + firstName, familyName + "!");

/*
    Wertzuweisung II + Datentypen
    JS ist ein untypisierte Sprache!
*/

// let test; // Deklaration
// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);
// console.log("----------------------------");
// test = "hello"; // string
// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);
// console.log("----------------------------");
// test = 3; // number
// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);
// console.log("----------------------------");
// test = true; // boolean
// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);
// console.log("----------------------------");

/* Variablen vs. Konstanten in JS */

// Variable
let test;  // Variable : Deklaration
test = "hi"; // Wertzuweisung (Initialisierung)
test = "hello"; // Überschreiben
console.log("Inhalt: " + test); // Ausgabe

// Konstante
const test2 = "Hi, du Kek!"; // Deklaration + Wertzuweisung gemeinsam!
// test2 = "Was geht";
console.log("Inhalt: " + test2); //Ausgabe
