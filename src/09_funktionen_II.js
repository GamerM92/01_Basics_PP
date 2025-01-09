/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : check
3. Fkt. Grundrechenarten : check
4. Ausgabe in Konsole : check
*/

const ERROR_STR_DIV = "Divison durch 0 nicht möglich";
const ERROR_STR_CAL = "Ungültiger Operator";

const prompt = require('prompt-sync')({sigint: true});

startApp()
function startApp() {
    output(calculator(getNum1(),getNum2(),getOp()))
}

function getNum1() {
    return Number(prompt("Erste Zahl eingeben: "))
}

function getOp() {
    return prompt("Gib einen gültigen Operator ein [ + | - | * | : | / | **]:" )
}

function getNum2() {
    return Number(prompt("Zweite Zahl eingeben: "))
}

// module: calculator | tests:
// agreement: "+","-","*",":","/"
// output(calculator(a,b,op));
function calculator(a,b,op) {
    // if (isNaN(a) || isNaN(b)) { // Wenn a oder b "isNaN" ist...
    //     return "Keine Rechnung möglich"
    // }
    // else
    // {
    switch (op) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case ":":
        case "/":
            return divide(a,b);
        case "**":
            return raise(a,b);
        default:
            return ERROR_STR_CAL;
        // }    
    }
}

// module: raise a ** b | test:
// output(raise(4,2)); -> Ergebnis 16
// output(raise(2,0)); -> Ergebnis 1
// output(raise(0,5)); -> Ergebnis 0
// output(raise(10,5)); -> Ergebnis 100000
function raise(a,b) {
    return a ** b;
}

// module: division a / b | test:
// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(0,2));
// output(divide(3,0));
// output(divide(0,0));
function divide(a,b) {
    if (b != 0) {
        return a / b;
    }
        return ERROR_STR_DIV
}

// module: multiplication a * b | test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b) {
    return a * b;
}

// module: subtraction a - b | test:
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
// output(subtract(0,2));
function subtract(a,b) {
    return a - b;
}

// module: addition a + b | test:
// output(add(3,2));
// output(add(3,-2));
// output(add(3,0));
function add(a,b) {
    return a + b;
}

// module: output | test:
// output("Hi");
// output(2);
// output(true);
function output(outputData) {
    console.log(outputData);
}