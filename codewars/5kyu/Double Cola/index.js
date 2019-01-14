const whoIsNext = (names, r) => {
  const queue = names.length;
  let total = names.length;
  let num = 1;
  while (total < r) {
    num *= 2;
    total += queue * num;
  }
  return names[Math.ceil((r + queue * num - total) / num) - 1];
};

// function whoIsNext(names, r) {
//   let i = 0;
//   while (r > 0) {
//     let a = names.length * 2 ** i;
//     if (r <= a) {
//       for (let j = 0; j < names.length; j++) {
//         if (r <= 2 ** i) return names[j];
//         else r = r - 2 ** i;
//       }
//     }
//     r = r - a;
//     i++;
//   }
// }

console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)); // Sheldon
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)); // Penny
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)); // Leonard

/* Really cool other solutions (*by other people*) 
function whoIsNext(names, r) {
  var l = names.length;
  while (r >= l) {
    r -= l;
    l *= 2;
    console.log(r)
  }
  return names[Math.ceil((names.length * r) / l) - 1];
}

*/
