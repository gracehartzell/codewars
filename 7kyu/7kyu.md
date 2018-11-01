## Bumps in the Road:

Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps 
before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), 
work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

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

I passed all tests on the first try; however, I did have some trouble remembering the process for finding the 
number of times a character appears in a string and did refer to notes I'd taken previously. My goal is to come 
back to this later and complete it in one line.



## Get the Middle Character

You are going to be given a word. Your job is to return the middle character of the word. If the word's length 
is odd, return the middle character. If the word's length is even, return the middle 2 characters.

_Input_
A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases 
due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do 
not need to worry about your solution timing out.

_Output_
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


## Vowel Count

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

## Who's Online?

Given an input of an array of objects containing usernames, status and time since last activity (in mins), create 
a function to work out who is online, offline and away.

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
Username will always be a string, status will always be either 'online' or 'offline' and lastActivity will always be 
number >= 0.

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should 
return an empty object{}.




## Simple Letter Removal

In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using 
the following rule:

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






## Remove Duplicate Words

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

I didn't have too much difficulty with this one but I know that the way I did it is very rudimentary. When I looked 
through other solutions (when they became unlocked after submitting my final solution), the majority of the solutions 
used methods that I'm not familiar with. 


## All unique

Write a program to determine if a string contains all unique characters. Return true if it does and false otherwise. 
The string may contain any of the 128 ASCII characters.

**FIRST SOLUTION (11 SEPT 2018):**
```js
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
```
After looking at other solutions, I decided to look into *Array.prototype.every()* since that is frequently used and 
I'm not familiar with it. I plan to do my next solution for this problem using that method (when I fully understand it, 
of course.)

## Thinkful - String Drills: Repeater
Write a class function named repeat() that takes two arguments (a string and a long integer), and returns a new string 
where the input string is repeated that many times. For example:
`Repeater.repeat("a", 5)` should return `"aaaaa"`

**SOLUTION:**
```js
const repeater = (string, n) => string.repeat(n);
```

## [Small enough? - Beginner](https://www.codewars.com/kata/small-enough-beginner/train/javascript)
You will be given an `array` and a `limit` value. You must check that all values in the array are below or equal to 
the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

**SOLUTION:**
```js
function smallEnough(array, limit){
    return array.every(x => x <= limit)
}
```
**Notes:** 
* So for this one, I didn't entirely understand what all of the components would be until I read the tests.
Mainly, for some reason I thought that the array would be an array of strings and not numbers. 
* I had some difficulty with this one initially but then remembered the `Array.prototype.every()` method. 
This method tests whether all elements in the array pass the test provided by the callback function. If any 
of them fail, then it returns false. The method does, however, return true for any condition put on an empty array.

## [Alphabet War](https://www.codewars.com/kata/alphabet-war/train/javascript)
Write a function that accepts `fight` string consists of only small letters and return who wins the fight. When the left side
wins return `Left side wins!`, when the right side wins return `Right side wins!`, in other case return `Let's fight again!`.
```js
// LEFT SIDE LETTERS AND POWER:
 w - 4
 p - 3 
 b - 2
 s - 1

 // RIGHT SIDE LETTERS AND POWER:
 m - 4
 q - 3 
 d - 2
 z - 1

```

**FIRST SOLUTION:**
(someone actually marked this as a best practice and I'm laughing)
```JS
function alphabetWar(fight) {
    let left = 0;
    let right = 0;

    for (i = 0; i < fight.length; i++) {
        (fight[i] === 'w')
        ? left += 4
        : (fight[i] === 'p')
        ? left += 3
        : (fight[i] === 'b')
        ? left += 2
        : (fight[i] === 's')
        ? left += 1
        : (fight[i] === 'm')
        ? right += 4
        : (fight[i] === 'q')
        ? right += 3
        : (fight[i] === 'd')
        ? right += 2
        : (fight[i] === 'z')
        ? right += 1
        : left += 0;
    }
    return (left > right) 
      ? `Left side wins!`
      : (left < right)
      ? `Right side wins!`
      : `Let's fight again!`
}

```
**Notes:**
* My first thought for getting the values to register is to put them in objects and then loop through the objects. That 
said, I'm not really sure that that would help get it done. 
* I ended up going with a really shoddy nested ternary and I'm not proud of myself for doing so but I couldn't think of 
anything else right now. After submitting my own, I looked at the other solutions and man do I feel dumb. So I'm going to
take that as a learning point for me to get a lot better with higher order functions because that would've saved so many
lines of code. On a separate hand, I think mine is a lot more readable than a lot of the HOF solutions... 
* Jokes aside, I redid it (no, I didn't use other people's solutions. I used my brain):
**BETTER SOLUTION:**
```js
function alphabetWar(fight) {
  const values = {'w': 4, 'p': 3, 'b': 2, 's': 1, 'm': -4, 'q': -3, 'd': -2, 'z': -1};
  let result = 0;
  fight.split('').map((t) => result += values[t] ? values[t] : 0  );
    return (result < 0 ? 'Right side wins!' : (result > 0) ? 'Left side wins!' : 'Let\'s fight again!' )
}
```
