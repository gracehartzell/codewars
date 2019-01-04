# [Is it a Number?](https://www.codewars.com/kata/57126304cdbf63c6770012bd)
Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:
```js
isDigit("3")
isDigit("  3  ")
isDigit("-3.23")
```
should return false:
```js
isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")
```

### SOLUTION:
```js
function isDigit(s) {
    if(!s.match(/\d/g)) {
        return false;
    } if (isNaN(s)) {
        return false;
    } else {
        return true;
    }
}
```

#### Discourse:
 Must use regular expressions because of isNaN and type coercion. isNaN will return true if given an empty string
More information on [special cases](https://tinyurl.com/mzvaevz).

* / / used to enclose a regex 
* \d is used to find a digit from 0-9
* \D character that is NOT a digit
* \w any alphanumeric character
* \W a nonalphanumeric character
* \s whitespace character (space, tab, newline, etc.)
* \S nonwhitespace character 
* . any character other than a newline
* g makes global
* i makes case insensitive

Used EJS, MDN, and above URL for reference with regex