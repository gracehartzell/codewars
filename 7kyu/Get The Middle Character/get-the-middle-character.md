# Get the Middle Character

You are going to be given a word. Your job is to return the middle character of the word. If the word's length 
is odd, return the middle character. If the word's length is even, return the middle 2 characters.

_Input_
A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases 
due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do 
not need to worry about your solution timing out.

_Output_
The middle character(s) of the word represented as a string.



### SOLUTION
``` javascript
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
```

