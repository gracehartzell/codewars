# Fibonacci

## Iterative

- The `for` Fibonacci:

```js
const fibonacci = num => {
  const arr = [0, 1];
  for (let i = 2; i < num + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[num];
};
```

- The `while` Fibonacci:

```js
const fibonacci = num => {
  let a = 1;
  b = 0;
  while (num >= 1) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
};
```

## Recursive

- While this is a neat solution, you should stick with the iterative methods in order to decrease time complexity.

```js
const fibonacci = num => {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
};
```
