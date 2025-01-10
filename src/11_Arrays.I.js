/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */

/*** 02. Theorie: Array */

// let arr;

// arr = new Array()
// arr = [];
// arr = [2,11,7,8,10]

// output(arr)
// output(arr.length);
// output(arr[arr.length - 1])

/* 02a. Theorie: Schleifen (for-schleife) */
/* For -Schleifen als allg. Wiederholungs-Struktur */

// for (let i = 0; i < 10; i++) {   
//     output("index: " + i);
// }

// for (let i = 0; i <= 100; i += 5) {
//     output("index: " + i);
// }

/* 02b. For-Schleife für Array-Index (Iteration)*/
let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
for (let i = 0; i < arr.length; i++) 
{
//    output(i); 
//    output(arr[i]);
}




/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */

// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
// function getSentence(...words) {
//     const GAP = " ";
//     const PUNCT = ".";
// let str =   word1 + GAP +
//             word2 + GAP +
//             word3 + GAP +
//             word4 +  
//             PUNCT;

//     const existingWords = words.filter(word => word);

//     let str = existingWords.join(GAP) + PUNCT;

//     return str;
// }
output(getSentenceArr(["Ich","bin","Max","Mütze"]));
output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));
function getSentenceArr(arr) {
    const GAP = " ";
    const PUNCT = ".";
    
    // for (let i = 0; i < arr.length; i++) 
    //     {
            return arr.join(GAP) + PUNCT;
        // }

}



/*** 01a. Funktionalität mit Array 1 */




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}



