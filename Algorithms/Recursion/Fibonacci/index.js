// ITERATIVE
// const fibonacci = num => {
//   const arr = [0, 1];
//   for (let i = 2; i < num + 1; i++) {
//     arr.push(arr[i - 2] + arr[i - 1])
//   }
//   return arr[num];
// }

// fibonacci(15)
const fibWhile = num => {
  let a = 1; b = 0;
  while (num >= 1) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
}
console.log(fibWhile(15))

const fibonacciRecursive = num => {
  if (num < 2) return num;
  return fibonacciRecursive(num - 1) + fibonacciRecursive (num - 2)
}

console.log(fibonacciRecursive(15));