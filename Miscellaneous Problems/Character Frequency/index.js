const characterFrequency = str => {
  let countObject = str.split("").reduce((acc, val) => {
    acc[val] ? acc[val]++ : (acc[val] = 1);
    return acc;
  }, {});

  // const keys = Object.keys(count);
  const arrays = Object.keys(countObject).map(key => [key, countObject[key]]);

  return arrays.sort((a, b) => {
    return b[1] - a[1] || a[0].charCodeAt(0) - b[0].charCodeAt(0);
  });
};

let str1 = "mississippi"  // [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
let str2 = "aaabbc" // [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
let str3 = "" // []

console.log(characterFrequency(str1))
console.log(characterFrequency(str2))
console.log(characterFrequency(str3))


const characterFreq = string => {
  const count = {};

  string.split("").forEach(char => {
    count[char] = (count[char] || 0) + 1;
  });

  const keys = Object.keys(count);
  const arrays = keys.map(key => {
    return [key, count[key]];
  });

  return arrays.sort((curr, next) => {
    return next[1] - curr[1] || curr[0].charCodeAt(0) - next[0].charCodeAt(0);
  });
};

console.log(characterFreq(str1))
console.log(characterFreq(str2))
console.log(characterFreq(str3))



/* MISC. ATTEMPTS/NOTES?
const characterFreq = num => {
  const arr = string.split("");
  const count = {};
  // const cleanCount = arr.reduce((accum, val) => {
  //   accum[val] ? accum[val]++ : accum[val] = 1;
  //   return accum;
  // }, {})
  // Step one: get count.
  arr.forEach(ch => {
    count[ch] = (count[ch] || 0) + 1;
  });
  // Step Two: Make arrays.
  const keys = Object.keys(count);
  const arrays = keys.map(key => {
    return [key, count[key]];
  });
  console.log("arrays", arrays);
  // Step Three: Sort muthafuckss
  const sorted = arrays.sort((a, b) => {
    // First check frequency.
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    // If havent returned yet, they are the same, check. char
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  });
};



function characterFrequency(string) {
  var count = string.split("").reduce((a, b) => {
    a[b] ? a[b]++ : (a[b] = 1);
    return a;
  }, {});

  var yolo = [];

  for (var key in count) {
    yolo.push([key, count[key]]);
  }

  return yolo.sort(sortF);
}

function sortF(a, b) {
  if (a[1] === b[1]) {
    return a[0].charCodeAt(0) - b[0].charCodeAt(0);
  } else {
    return b[1] - a[1];
  }
}
 



 */