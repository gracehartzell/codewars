const memoizeGEN = cb => {
  let cache = {};
  return (...args) => {
    if (args in cache) {
      console.log("Fetching from cache:", ...args);
      return cache[args];
    } else {
      console.log("Calculating result");
      cache[args] = cb(...args);
      return cache[args];
    }
  };
};

const isPrime = num => {
  if (num <= 1) return false;
  else if (num === 2 || num === 3) return true;
  else if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0) return false;
    i += 5;
  }
  return true;
};

let inputArr1 = [3,4,6,8];
let inputArr2 = [9,5,9,4];

const getSum = (total, num) => total + num;

const addTwoArrays = (arr1, arr2) => {
  return (
    arr1.filter(number => !isPrime(number)).reduce(getSum) +
    arr2.filter(number => !isPrime(number)).reduce(getSum)
  );
};

const memoizedAddTwoArr = memoizeGEN(addTwoArrays);

try {
  console.log("calculated value:", memoizedAddTwoArr(inputArr1, inputArr2)); // calculated
  console.log("cached value:", memoizedAddTwoArr(inputArr1, inputArr2)); // cached
} catch (e) {
  console.error("Generic memoized:", e);
}