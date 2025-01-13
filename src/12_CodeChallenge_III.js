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
    // Die Wörter manuell zu einem Satz zusammenfügen
    let sentence = "";
    for (let i = 0; i < words.length; i++) {
        // Leerzeichen hinzufügen, außer beim letzten Wort
        sentence += words[i] + (i < words.length - 1 ? " " : "");
    }
    
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
            return "Ungültiger Satztyp";
    }
    
    return sentence;
}

function output(outputStr) {
    console.log(outputStr);
}
