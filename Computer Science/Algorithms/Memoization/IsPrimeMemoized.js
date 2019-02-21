// Putting in file instead of importing for Quokka purposes
const memoizeGEN = cb => {
  let cache = {};
  return (...args) => {
    if (args in cache) {
      console.log("Fetching from cache:", ...args); // Fetching from cache: 179424691​​​​​
      return cache[args];
    } else {
      cache[args] = cb(...args);
      return cache[args];
    }
  };
};

const memoizedGenericFunc = memoizeGEN();

// Check if number is prime:
const tenmillionth = 179424691;
const onePointFourBillionth = 32416187567;

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

const memoizedIsPrime = memoizeGEN(isPrime);

try {
  console.log("calculated value:", memoizedIsPrime(tenmillionth)); // calculated value: true
  console.log("cached value:", memoizedIsPrime(tenmillionth)); // cached value: true
} catch (e) {
  console.error("Generic memoized:", e);
}


