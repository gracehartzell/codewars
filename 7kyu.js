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
console.log(getMiddle('testing'));

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
console.log(getCount2('cookie'));

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

console.log(bump("nnnnnnnnnnnnnnnnnnnnnnn"));
