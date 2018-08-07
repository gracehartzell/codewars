**Bumps in the Road:**

Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

Solution:
``` javascript
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
```

I passed all tests on the first try; however, I did have some trouble remembering the process for finding the number of times a character appears in a string and did refer to notes I'd taken previously. My goal is to come back to this later and complete it in one line.



**Get the Middle Character**

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Input
A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output
The middle character(s) of the word represented as a string.

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


**Vowel Count**

Return the number (count) of vowels in the given string.
We will consider a, e, i, o, and u as vowels for this Kata.
The input string will only consist of lower case letters and/or spaces.

```javascript
function getCount(str) {
    var vowelsCount = 0;
    for (var i = 0; i < str.length; i++) {
        if ((str[i] === "a") || (str[i] === "e") || (str[i] === "i") || (str[i] === "o") || (str[i] === "u")) {
            vowelsCount += 1
        }
    }
    return vowelsCount;
}
// refactored: 
function getCount2(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }
console.log(getCount2('cookie'));
```

