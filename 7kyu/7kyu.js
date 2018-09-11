// GET THE MIDDLE CHARACTER:
/* Given a string (length from 0 to 100), return the middle character. If odd, return the middle; if even, return middle 2. */
// first try (31/7/2018)
function getMiddle(str) {
    let position; // position of middle
    let length; // length of returned string

    if (str.length % 2 === 1) {
        position = str.length / 2;
        length = 1;
    }
    else {
       position = str.length / 2 - 1;
       length = 2;
    }
    return str.substring(position, position + length);
}
// console.log(getMiddle('testing'));

// VOWEL COUNT:
/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, and u as vowels for this Kata.
The input string will only consist of lower case letters and/or spaces. */
// first try (30/7/2018): 
function getCount(str) {
    var vowelsCount = 0;
    for (var i = 0; i < str.length; i++) {
        if ((str[i] === "a") || (str[i] === "e") || (str[i] === "i") || (str[i] === "o") || (str[i] === "u")) {
            vowelsCount += 1
        }
    }
    return vowelsCount;
}
// more straightforward:
function getCount2(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }
// console.log(getCount2('cookie'));

/***************************************************
 *************** BUMPS IN THE ROAD *****************/
/* Given a string showing either flat road ("_") or bumps ("n"), 
work out if you make it home safely. 15 bumps or under, 
return "Woohoo!", over 15 bumps return "Car Dead". */
//first try 07/8/18)

function bump(x) {
    let xCount = 0;
    let letter = x.indexOf('n');

    while ( letter !== -1) {
        xCount++
        letter = x.indexOf('n', letter + 1);
    }
    // (xCount > 15) ? "Car Dead" : "Woohoo!";
    if (xCount > 15) {
        return "Car Dead"
    }
    else {
        return "Woohoo!"
    }
}

// console.log(bump("nnnnnnnnnnnnnnnnnnnnnnn"));


/***************************************************
 *************** WHO'S ONLINE? *********************
 ***************************************************/


 const friends = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
  }, {
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob', 
    status: 'online',
    lastActivity: 104
  }]

const whosOnline = (friends) => {
    const output = [];
    const status = {};

    output.push(friends.map(x => x.status));

    return output;

}
console.log(whosOnline(friends));



// const inventory = [
//     {name: 'apples', quantity: 2},
//     {name: 'bananas', quantity: 0},
//     {name: 'cherries', quantity: 5}
// ];

// const result = inventory.find( fruit => fruit.name === 'cherries' );

/***************************************************
 ************* SIMPLE LETTER REMOVAL ***************
 ***************************************************/

 // k is the number of characters to remove
// function solve(string, k){
//     let alphabet = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
//     let newString = '';
//     for (let i = 0; i < alphabet.length; i++) {
//         for (let j = 0; j < string.length; j++) {

//         }
//     }
// }


function spEng (str) {
    result = (str.toLowerCase().includes('english')) ? true : false;
    return result;
}
console.log(spEng('englIsh'))

function century(year) {
        return Math.ceil(year / 100);
  }
console.log(century(2000));



/*
i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
ii) If a ≥ 2*b, set a to a - 2*b, and repeat step (i). Otherwise, go to step (iii);
iii) If b ≥ 2*a, set b to b - 2*a, and repeat step (i). Otherwise, return [a,b]. */

// function solve(a, b) {
//     if (a >= (2 * b)) {
//         if ()
//      a = a - 2 * b;
        
//     }

//     }
    
// }
// console.log(solve(4, 2))


/***************************************************
 *************** REMOVE DUPLICATE WORDS ************
 ***************************************************/


function removeDuplicateWords(str) {
    let strArray = str.split(' ');
    let array = []
    // loop through and check for duplicates
    for (let i = 0; i < strArray.length; i++) {
        if(array.indexOf(strArray[i]) === -1) {
            array.push(strArray[i])
        }
    }
   
    return array.join(' ');
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta'));


/***************************************************
 ****************** ALL UNIQUE *********************
 ***************************************************/

function hasUniqueChars(str){
    
    for(let i=0; i < str.length; i++){
        let temp = str[i];

        for(let j = i+1; j <= str.length - 1; j++) {
            if (temp === str[j]) {
                return false;
            }
        };  
    };            
    return true;
};


// TESTS
console.log(hasUniqueChars('  nAa') === false);
console.log(hasUniqueChars('abcdef') === true);
console.log(hasUniqueChars('++-') === false);
