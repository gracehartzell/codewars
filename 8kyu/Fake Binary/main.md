# [Fake Binary](https://www.codewars.com/kata/57eae65a4321032ce000002d)

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
Return the resulting string.

### SOLUTION:
First try: (27/7/2018)
```js
function fakeBinary(x){
  return x.replace(/[1234]/gi, '0').replace(/[56789]/gi, '1');
}
```