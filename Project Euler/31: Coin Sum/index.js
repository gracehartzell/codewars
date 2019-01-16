const coinSums = total => {
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];
  const sums = [];
  sums[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    let largestCoin = coins[i];
    for (let j = largestCoin; j <= total; j++) {
      sums[j] = sums[j] || 0;
      sums[j] += sums[j - largestCoin];
    }
  }
  return sums[total];
};
