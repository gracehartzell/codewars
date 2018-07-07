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

