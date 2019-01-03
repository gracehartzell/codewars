Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

-------------------
## SOLUTION
```js
const reverse = x => {
  let stringified = x.toString();
  let reverseString = "";
  for (let i = stringified.length - 1; i >= 0; i--) {
    reverseString += stringified[i];
  }

  let stringToNum = parseInt(reverseString);

  if (x < 0) {
    stringToNum = -stringToNum;
  }
  if (stringToNum >= 2147483648 || stringToNum <= -2147483648) {
    return 0;
  }

  return stringToNum;
};


const reverse2 = x => {
  let a = 0;
  while (x >= 1 || x <= -1) {
    let num = x % 10;
    a = a * 10 + num;
    x = parseInt(x / 10);
  }
  if (a >= 2147483648 || a <= -2147483648) {
    return 0;
  }
  return a;
};
```