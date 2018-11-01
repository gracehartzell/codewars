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



/***************************************************
 ******** FIND NTH LONGEST STRING IN ARRAY *********
 ***************************************************/

function longest(arr, n) {
    let preservedOriginal = arr.slice(0);
    console.log('unsorted', preservedOriginal);
    
    //descending by length
    preservedOriginal.sort((a,b)=>{
        return b.length - a.length || arr.indexOf(a) - arr.indexOf(b);
    });
    console.log('sorted!', preservedOriginal);

    return preservedOriginal[n-1];
}

console.log(longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k','l'], 1) === 'a'); 
console.log(longest(['aa', 'bb', 'cc', 'dd', 'eee', 'b', 'f', 'ff', 'hhh', 'gggg'],4) === 'aa')
console.log(longest(['Hello','World','Codewars','Katas'],4) === 'Katas');


/***************************************************
 ************* MULTIPLES OF 3 OR 5 *****************
 ***************************************************/

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


console.log(solution(10)); 

// function sumOfMultiples(number) {
//     let sum = 0;
//     for(let i=1; i<number; i++) {
//         if(i % 3 === 0 || i % 5 === 0){
//             sum += i;
//         }
//     }
//     return sum;
// }


/***************************************************
 ***************** DETECT PANGRAM ******************
 ***************************************************/

function isPangram(string) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let lowerCaseString = string.toLowerCase();
    for (let i = 0; i < letters.length; i++) {
        if (lowerCaseString.indexOf(letters[i]) === -1) {
            return false;
        }
    }
    return true;
} 


console.log(isPangram('The quick brown fox jumps over the lazy dog.') === true);
console.log(isPangram('This is not a pangram.') === false);


/***************************************************
 *** ALL ARRAY ELEMENTS EXCEPT SPECIFIED INDEXES ***
 ***************************************************/

// var array = ['a', 'b', 'c', 'd', 'e'];
// var array2 = array.except([1,3]);
// array2 should contain ['a', 'c', 'e']

// Array.prototype.except = function(keys) {
//     let newArr = [];

//     for (let i = 0; i < this.length; i++) {

//     }


// };

// this.filter

/***************************************************
 *************** BREAK CAMEL CASE ******************
 ***************************************************/
function solution(str) {
   return `${str}`.split(/(?=[A-Z])/).join(' '); //regex: must be followed by an uppercase letter 
}

console.log(solution('camelCasing'));