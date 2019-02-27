const input = [8, 6, 7, 5, 3, 0, 9];
const strs = ['Eren', 'Mikasa', 'Armin', 'Annie'];
console.log(input.filter(el => el % 3 === 0)); // [6, 3, 0, 9]

// FILTER WITH FOR LOOP, O(n)
const filterFor = (arr, cb) => {
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) filtered.push(arr[i]);
  }
  return filtered;
};

console.log(filterFor(input, el => el % 3 === 0)); // [6, 3, 0, 9]

// FILTER WITH WHILE LOOP
const filterWhile = (arr, cb) => {
  let filtered = [];

  let i = 1;
  while (i < arr.length) {
    if (cb(arr[i])) filtered.push(arr[i]);
    i++;
  }
  return filtered;
}

console.log(filterWhile(input, el => el % 3 === 0)); // [6, 3, 0, 9]
