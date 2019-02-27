const input = [8, 6, 7, 5, 3, 0, 9];

const filterFor = (arr, cb) => {
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) filtered.push(arr[i]);
  }
  return filtered;
};


console.log(input.filter(el => el % 3 === 0)); // [6, 3, 0, 9]
console.log(filterFor(input, (el) => el % 3 === 0)) // [6, 3, 0, 9]
