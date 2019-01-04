// const reverse = x => {
//   // number to string to manipulate:
//   let stringified = x.toString();
//   let reverseString = "";
//   // reverse string:
//   for (let i = stringified.length - 1; i >= 0; i--) {
//     reverseString += stringified[i];
//   }

//   let stringToNum = parseInt(reverseString);

//   if (x < 0) {
//     stringToNum = -stringToNum;
//   }
//   // prevent overflow
//   if (stringToNum >= 2147483648 || stringToNum <= -2147483648) {
//     return 0;
//   }

//   return stringToNum;
// };


const reverse = x => {
  let a = 0;
  while (x >= 1 || x <= -1) {
    let num = x % 10;
    a = a * 10 + num;
    x = parseInt(x / 10);
  }
  if (a >= 2147483648 || a <= -2147483648) {
    return 0;
  }
  return a;
};

console.log(reverse(1534236469));
console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
