# [Reverse Ever Other Word in the String](https://www.codewars.com/kata/reverse-every-other-word-in-the-string/)
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, 
while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are 
a part of the word in this kata.




------------------------------------------------------

## SOLUTION:
Initial: 
```js
function reverse(str) {
  let array = str.split(' ');
  const mapFuncCb = (item, index) => {
    if (!(index % 2)) {
      return item;
    }
    else {
      return item.split('').reverse().join('');
    }
  };
  return array.map(mapFuncCb).join(' ');
};
```

Refactored:
```js
function reverse(str){
  return revStr = str.split(" ").map((el, index) => {
    return index % 2 !== 0 ? 
           el.split("").reverse().join("") : 
           el;
  }).join(" ");
} 
```

### Discourse:
This problem seemed quite daunting at first until I sat back and spent some time going back over `map`. Once doing so,
it became far more manageable and eliminated a lot of the issues I was having with trying to do it with a for loop. 