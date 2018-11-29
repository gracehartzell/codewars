// customers = []; integer = person = amount of time needed to checkout 
// n = number of checkout tills
// return an integer
const queueTime = (customers, n) => {
  let registers = [];

  for (let i = 0; i < n; i++) registers.push(0);

  while (customers.length > 0) {
    let next = registers.indexOf(Math.min.apply(null, registers));
    registers[next] += customers.shift();
  }
  return Math.max.apply(null, registers);
}



// console.log(queueTime([], 1) === 0);
// console.log(queueTime([1,2,3,4], 1) === 10);
// console.log(queueTime([2,2,3,3,4,4], 2) === 9);
// console.log(queueTime([1,2,3,4,5], 100) === 5);
