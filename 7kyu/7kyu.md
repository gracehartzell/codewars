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

**Who's Online?**
Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

The input data has the following structure:

```javascript
[{
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
// EXPECTED OUTPUT:
{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
```
Username will always be a string, status will always be either 'online' or 'offline' and lastActivity will always be number >= 0.

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object{}.




**Simple Letter Removal**

In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:

```js
- first remove all letter 'a', followed by letter 'b', then 'c', etc...
- remove the leftmost character first.

// For example: 
solve('abracadabra', 1) = 'bracadabra' # remove the leftmost 'a'.
solve('abracadabra', 2) = 'brcadabra'  # remove 2 'a' from the left.
solve('abracadabra', 6) = 'rcdbr'      # remove 5 'a', remove 1 'b' 
solve('abracadabra', 8) = 'rdr'
solve('abracadabra',50) = ''
```

*Solution*






**Remove Duplicate Words**

Your task is to remove all duplicate words from string, leaving only single (first) words entries.

*Solution*
```js
function removeDuplicateWords(str) {
    let strArray = str.split(' ');
    let filteredArray = [];

    for (let i = 0; i < strArray.length; i++) {
        if(filteredArray.indexOf(strArray[i]) === -1) {
            filteredArray.push(strArray[i]);
        }
    };
   
    return filteredArray.join(' ');
};
``` 

I didn't have too much difficulty with this one but I know that the way I did it is very rudimentary. When I looked through other solutions (when they became unlocked after submitting my final solution), the majority of the solutions used methods that I'm not familiar with. 

