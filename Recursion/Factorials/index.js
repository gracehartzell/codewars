// ITERATIVE FACTORIALS
// iterative for: (no extra variable creation for speed purposes)
const factorial = num => {
  if (num === 1 || num === 0) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};
console.log(factorial(4));


// while
const factorializeWhile = num => {
  let accumulator = num;
  if (num === 0 || num === 1) return 1;
  while (num > 1) {
    num--;
    accumulator *= num;
  }
  return accumulator;
};
console.log(factorializeWhile(4));


// RECURSIVE
const recursiveFactorial = num => {
  return (num === 1) ? 1 : num * recursiveFactorial( num - 1 );
}
console.log(recursiveFactorial(4));

