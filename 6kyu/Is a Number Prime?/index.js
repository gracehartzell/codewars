// function isPrime(num) {
//   for (let i = 0; i < num; i++) {
//     if (num % i === 0) return ` HELLO ${num} is not prime`;
//   }
//   return (true, `${num} is prime`);
// }
console.log(isPrime(0)); // === false, '0 is not prime'
console.log(isPrime(1)); //  === false, '1 is not prime'
console.log(isPrime(86)); // === true
console.log(isPrime(89)); // === true
console.log(isPrime(29)); // === true
console.log(isPrime(2)); // === true


const isPrime = num => {
  if (num <= 1) return false;
  else if (num === 2 || num === 3) return true;
  else if (num % 2 === 0 || num % 3 === 0) return false;
 // check every odd number that isn't divisible by 3 until it 
  //  becomes larger than the square root of the number
  // while because you don't necessarily know the number of iterations needed 
  let i = 5;
  while (i*i <= num) {
    if (num % i === 0 || num % (i+2) === 0) {
      return false;
    }
    i += 6
  };
  return true;
};