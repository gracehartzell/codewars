// Bad (time complexity) solution:
const levenshteinDistance = (prev, target) => {
  // empty E.D. matrix for all possible operational outcomes:
  const distanceMatrix = Array(target.length + 1)
    .fill(null)
    .map(() => Array(prev.length + 1).fill(null));

  // First fills (i and j): equal to length of substring:
  // Prev to empty string:
  for (let i = 0; i <= prev.length; i++) {
    distanceMatrix[0][i] = i;
  }

  // transforming empty string to target:
  for (let j = 0; j <= target.length; j++) {
    distanceMatrix[j][0] = j;
  }

  for (let j = 1; j <= target.length; j++) {
    for (let i = 1; i <= prev.length; i++) {
      const indicator = prev[i - 1] === target[j - 1] ? 0 : 1;
      // take minimum value of W, NW, and N cells and add 1:
      distanceMatrix[j][i] = Math.min(
        distanceMatrix[j][i - 1] + 1, // deletion
        distanceMatrix[j - 1][i] + 1, // insertion
        distanceMatrix[j - 1][i - 1] + indicator // substitution
      );
    }
  }
  return distanceMatrix[target.length][prev.length];
};

const str1 = "Saturday";
const str2 = "Sunday";

console.log(levenshteinDistance(str1, str2)); // 3