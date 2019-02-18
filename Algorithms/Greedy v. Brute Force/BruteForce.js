/* 
  Write a function, makeChange, that returns an integer that represents the 
  least number of coins that add up to an amount where the amount is always 
  divisible by 5.
  
  * coin values: 5, 10, 25

  **** GREEDY SOLUTION IS TO CHOOSE THE LARGEST COIN THAT YOU CAN AT ANY 
        GIVEN TIME
  */
// const coins = [10, 6, 1];

// const makeChange = value => {
//   if (value === 0) return 0;
//   let minCoins;
//   coins.forEach((coin, i) => {
//     if (value - coin >= 0) {
//       let currMinCoins = makeChange(value - coin, i);
//       if (minCoins === undefined || currMinCoins < minCoins) {
//         minCoins = currMinCoins;
//       }
//     }
//   });
//   return minCoins + 1;
// };

const coins = [10, 6, 1];

const makeChange = value => {
  if (value === 0) return 0;
  let minCoins;
  coins.forEach(coin => {
    if (value - coin >= 0) {
      let currMinCoins = makeChange(value - coin);
      if (minCoins === undefined || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });
  return minCoins + 1;
};

console.log(makeChange(19));
