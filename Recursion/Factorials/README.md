# Factorials! <sub>factorials</sub>

## Iteratives

- The `for` factorial (decrementing for speed):

```js
const factorial = num => {
  if (num === 1 || num === 0) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
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
