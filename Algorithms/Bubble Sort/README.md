# Bubble Sort

Probably not going to do tests for this one... might possibly, but not now.

## Solution:

In the `index.js`, you'll find three different solutions that all work without problem.

```js
const bubbleSort3 = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      return bubbleSort1(arr);
    }
  }
};
```
