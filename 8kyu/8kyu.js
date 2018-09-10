/* IS IT A NUMBER?
Given a string s, write a method (function) that will return 
true if its a valid single integer or floating number or false if its not. */
    // 1. Use isNaN to check string
    
function isDigit(s) {
    if(!s.match(/\d/g)) {
        return false;
    } if (isNaN(s)) {
        return false;
    } else {
        return true;
    }
}

/* Must use regular expressions because of isNaN and type coercion. isNaN will return true if given an empty string
More information on special cases: https://tinyurl.com/mzvaevz

/ / used to enclose a regex 
\d is used to find a digit from 0-9
\D character that is NOT a digit
\w any alphanumeric character
\W a nonalphanumeric character
\s whitespace character (space, tab, newline, etc.)
\S nonwhitespace character 
. any character other than a newline

g makes global
i makes case insensitive

Used EJS, MDN, and above URL for reference with regex
*/



// FAKE BINARY: Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
//  Return the resulting string.  
// First try: (27/7/2018)
function fakeBinary(x){
    return x.replace(/[1234]/gi, '0').replace(/[56789]/gi, '1');
  }

console.log(fakeBinary('93829')) //testing returns 10101


