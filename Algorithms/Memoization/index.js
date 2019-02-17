// Memoization function for a times10 function:

const times10 = n => n * 10;

const memoize = cb => {
  let cache = {};
  return n => {
    if (n in cache) {
      console.log("Fetching from cache:", n);
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = cb(n);
      cache[n] = result;
      return result;
    }
  };
};

const memoizedTimes10 = memoize(times10);

try {
  console.log("calculated value:", memoizedTimes10(9)); // calculated
  console.log("cached value:", memoizedTimes10(9)); // cached
} catch (e) {
  console.error("memoizedTimes10", e);
}

// MORE GENERIC MEMOIZE:
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

const memoizedGenericFunc = memoizeGEN();

try {
  console.log("calculated value:", memoizedDoubleAdd(9, 10)); // calculated
  console.log("cached value:", memoizedDoubleAdd(9, 10)); // cached
} catch (e) {
  console.error("Generic memoized:", e);
}
