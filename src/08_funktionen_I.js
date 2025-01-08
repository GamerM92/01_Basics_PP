/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call

const prompt = require('prompt-sync')({sigint: true});
console.log("")
const name = prompt("Bitte gib einen Namen ein: ");
test();

// Funktionsrumpf | callee
// Funktionsdekleration
function test()
{
    console.log("Hallo, " + name + "!")    
}

