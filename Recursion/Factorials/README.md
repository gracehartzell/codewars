# Factorials! <sub>factorials</sub>

## Iteratives

- The `for` factorial (decrementing for speed):

```js
const factorial = num => {
  let factorialResult = 1;
  for (let i = 1; i <= num; i--) {
    factorialResult *= i;
  }
  return factorialResult;
};
```


- The `while` factorial:

```js
const factorial = num => {
  let factorialResult = 1;
  while (num >= 1) {
    factorialResult *= num;
    break;
  }
  return factorialResult;
};
```

## Recursive

```js
const factorial = num => {
  return num === 1 ? 1 : num * factorial(num - 1);
};
```