/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

function getSentence(words, type) {
    // Die Wörter aus dem Array zu einem Satz zusammenfügen
    let sentence = words.join(" ");
    
    // Abhängig vom Typ das richtige Satzzeichen hinzufügen
    switch (type) {
        case "S":
            sentence += ".";
            break;
        case "Q":
            sentence += "?";
            break;
        case "E":
            sentence += "!";
            break;
        default:
            throw new Error("Ungültiger Satztyp");
    }
    
    return sentence;
}

function output(outputStr) {
    console.log(outputStr);
}