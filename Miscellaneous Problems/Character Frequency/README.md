# Character Frequency

Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

## Examples

|   **Input**   |                     **Output**                     |
| :-----------: | :------------------------------------------------: |
|   "aaabbc"    |       [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]       |
| "mississippi" | [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ] |
|      ""       |                        [ ]                         |

---

## Solutions

```js
const characterFrequency = str => {
  let countObject = str.split("").reduce((acc, val) => {
    acc[val] ? acc[val]++ : (acc[val] = 1);
    return acc;
  }, {});

  const arrays = Object.keys(countObject).map(key => [key, countObject[key]]);

  return arrays.sort((a, b) => {
    return b[1] - a[1] || a[0].charCodeAt(0) - b[0].charCodeAt(0);
  });
};
```
