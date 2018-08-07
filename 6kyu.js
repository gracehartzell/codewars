// DECODE THE MORSE CODE
/* Function that takes morse code as input and returns a decoded, human-readable string.  */
// First try (31/7/2018)
// decodeMorse = function(morseCode) {
//     let morse = MORSE_CODE; // MORSE_CODE was preloaded into the problem on codewars; to make it work here, you need to manually input a longass string with each letter/number/character. #byeee
//     let words = (morseCode).split('  '); //words split by two spaces 
//     let letters = words.map((w) => w.split(' ')) //letters split by one space 
//     let decoded = []; // empty array to push translated letters to

//     for (var i = 0; i < letters.length; i++) {
//         decoded[i] = [];
//         for(let x = 0; x < letters[i].length; x++) {
//             if(MORSE_CODE[letters[i][x]]) {
//                 decoded[i].push(MORSE_CODE[letters[i][x]]);
//             }
//         }
//     }
//         return decoded.map(arr => arr.join('')).join('  ').trim(' ');
    
    
// }
// console.log(decodeMorse('.... . -.--  . --- ..- -.. .'));

/************************** MISSING ALPHABET *************************/
function insertMissingLetters(str) {
    const alpha = ['abcdefghijklmnopqrstuvwxyz'];
    let missingLetters = [];
    let 

}

