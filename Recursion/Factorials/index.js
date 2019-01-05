// ITERATIVE FACTORIALS
  // for
const factorialFor = num => {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
factorialFor(3);


  // while
const factorialWhile = num => {
  let factorial = 1;
  while (num >= 1) {
    factorial *= num;
    break;
  }
  return factorial;
}
factorialWhile(3);

 
// RECURSIVE 
const recursiveFactorial = num => {
  return (num === 1) ? 1 : num * recursiveFactorial(num - 1);
}

recursiveFactorial(4)
