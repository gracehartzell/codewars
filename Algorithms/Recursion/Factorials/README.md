# Factorials! <sub>factorials</sub>

## Iteratives

- The `for` factorial (decrementing for speed):

```js
function factorial (num) {
  let factorialAcc = 1;
  for (let i = num; i > 1; i--) {
    factorialAcc *= i;
  }
  return factorialAcc;
};
```


- The `while` factorial:

```js
const factorial = num => {
  let accumulator = num;
  if (num === 0 || num === 1) return 1;
  while (num > 1) {
    num--;
    accumulator *= num;
  }
  return accumulator;
};
```

## Recursive

```js
const factorial = num => {
  return (num === 1) ? 1 : num * factorial( num - 1 );
}
```
