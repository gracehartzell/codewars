DECODE THE MORSE CODE
In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.


Current solution:
``` javascript
decodeMorse = function(morseCode) {
    let morse = MORSE_CODE; // MORSE_CODE was preloaded into the problem on codewars; to make it work here, you need to manually input a longass string with each letter/number/character. #byeee
    let words = (morseCode).split('  '); //words split by two spaces 
    let letters = words.map((w) => w.split(' ')) //letters split by one space 
    let decoded = []; // empty array to push translated letters to

    for (var i = 0; i < letters.length; i++) {
        decoded[i] = [];
        for(let x = 0; x < letters[i].length; x++) {
            if(MORSE_CODE[letters[i][x]]) {
                decoded[i].push(MORSE_CODE[letters[i][x]]);
            }
        }
    }
        return decoded.map(arr => arr.join('')).join('  ').trim(' ');
       
}
console.log(decodeMorse('.... . -.--  . --- ..- -.. .'));
```



MISSING ALPHABET
In this Kata you have to create a function,named insertMissingLetters,that takes in a string and outputs the same string processed in a particular way.

The function should insert only after the first occurence of each character of the input string, all the alphabet letters that:

-are NOT in the original string
-come after the letter of the string you are processing

Each added letter should be in uppercase, the letters of the original string will always be in lowercase.

Example:

input: "holly"

missing letters: "a,b,c,d,e,f,g,i,j,k,m,n,p,q,r,s,t,u,v,w,x,z"

output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"

``` javascript


```