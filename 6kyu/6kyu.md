##DECODE THE MORSE CODE
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



##MISSING ALPHABET
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
function insertMissingLetters(str){
  const alpha = [...'abcdefghijklmnopqrstuvwxyz'];
  const missingLetters = [];
  const output = [];
  const occurences = {};
  
  //generate missingLetters
  for(let i = 0; i < alpha.length; i++){
    const alphaLetter = alpha[i];
    if(str.indexOf(alphaLetter) === -1){
      missingLetters.push(alphaLetter);
    } else {
      missingLetters.push('');
    }
  }
  //merge
  for(let j = 0; j < str.length; j++){
    const strLetter = str[j];
    const position = alpha.indexOf(strLetter);
    if(occurences[strLetter]){
     occurences[strLetter] += 1;
      output.push(strLetter);
    } else {
      occurences[strLetter] = 1;
      output.push(strLetter.concat(missingLetters.slice(position).join('').toUpperCase()));
    }
  }
  return output.join('');
}
```

##Multiples of 3 or 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

**SOLUTION:**
```js
function solution(number) {
    let intArray = [];

    for (i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            intArray.push(i);
        }
        console.log(intArray)
    }
    return intArray.reduce((a,b) => a + b, 0)
}
```

## Detect Pangram
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

**SOLUTION:**

```js
function isPangram(string) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let lowerCaseString = string.toLowerCase();
    for (let i = 0; i < letters.length; i++) {
        if (lowerCaseString.indexOf(letters[i]) === -1) {
            return false;
        }
    }
    return true;
} function isPangram(string) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let lowerCaseString = string.toLowerCase();
    for (let i = 0; i < letters.length; i++) {
        if (lowerCaseString.indexOf(letters[i]) === -1) {
            return false;
        }
    }
    return true;
}
```

## Get all array elements except those with specified indexes
Extend the Array prototype/class with a function to return all elements of that array, except the ones with the indexes passed in the parameter.

The function should accept either an array or a single integer as parameters, like this: 
```js
var array = ['a', 'b', 'c', 'd', 'e'];
var array2 = array.except([1,3]);
// array2 should contain ['a', 'c', 'e']

//OR 
var array = ['a', 'b', 'c', 'd', 'e'];
var array2 = array.except(1);
// array2 should contain ['a', 'c', 'd', 'e']
```

**SOLUTION:**
```JS

```

## Largest Number Arrangement
Create a function that takes a list of one or more non-negative integers, and arranges them such that they form the largest possible number.

Examples:
```js
largestArrangement([4, 50, 8, 145]) returns 8504145 (8-50-4-145)

largestArrangement([4, 40, 7]) returns 7440 (7-4-40)

largestArrangement([4, 46, 7]) returns 7464 (7-46-4)

largestArrangement([5, 60, 299, 56]) returns 60565299 (60-56-5-299)

largestArrangement([5, 2, 1, 9, 50, 56]) returns 95655021 (9-56-5-50-21)
```

