/* 
  Write a function, makeChange, that returns an integer that represents the 
  least number of coins that add up to an amount where the amount is always 
  divisible by 5.
  
  * coin values: 5, 10, 25

  **** GREEDY SOLUTION IS TO CHOOSE THE LARGEST COIN THAT YOU CAN AT ANY 
        GIVEN TIME
  */
 
 // input amount: 40 , output # of coins: 3 (25, 10, 5)
 // input amount: 35, output # of coins: 2 (25, 10) 

const coins = [5, 10, 25]
 
const makeChange = (coins, amount) => {
  // sort coins in descending order
  coins.sort((a, b) => b - a);
  // keep track of coins
  let coinCount = 0;
  // index for searching coins:
  let i = 0;
  while (amount > 0) {
    if (coins[i] <= amount) {
      amount -= coins[i];
      coinCount++;
    } else {
      i++;
    }
  }
  return coinCount;
}   