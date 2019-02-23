const input = [8, [[6, 7]], [[[5]]], [3, [0]], [9]];
const output = [8, 6, 7, 5, 3, 0, 9];

const flatBasic = arr => {
  if (!Array.isArray(arr)) return [arr];

  let flatArray = [];
  for (let i = 0; i < arr.length; i++) {
    flatArray = flatArray.concat(flatBasic(arr[i]));
  }
  return flatArray;
};

const flatReduce = arr => {
  return arr.reduce(
    (prev, curr) => prev.concat(Array.isArray(curr) ? flatReduce(curr) : curr),
    []
  );
};

const flatWhile = arr => {
  let flatArray = [];
  
  while(arr.length) {
    let element = arr.shift();
    if(Array.isArray(element)) arr = element.concat(arr);
    else flatArray.push(element);
  }
  return flatArray;
}


console.log(flatReduce(input));
console.log(flatBasic(input));
console.log(flatWhile(input));

