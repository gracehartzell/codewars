const memoize = cb => {
  let cache = {};
  return x => {
    if (x in cache) {
      console.log("Fetching from cache", x);
      return cache[x];
    } else {
      console.log("Calculated answer:");
      cache[x] = cb(x);
      return cache[x];
    }
  };
};

const factorial = memoize(num => {
  return num <= 1 ? 1 : num * factorial(num - 1);
});

console.log(factorial(5));
console.log(factorial(6));
