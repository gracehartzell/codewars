const isPrime = num => {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const gap = (g, m, n) => {
  let lastPrime = 0;
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      if (i - lastPrime == g) return [lastPrime, i];
      else lastPrime = i;
    }
  }
  return null;
};

console.log(gap(2, 100, 110)); //  [101, 103]
console.log(gap(4, 100, 110)); //  [103, 107]
console.log(gap(6, 100, 110)); //  null
console.log(gap(8, 300, 400)); //  [359, 367]
console.log(gap(10, 300, 400)); // [337, 347]
