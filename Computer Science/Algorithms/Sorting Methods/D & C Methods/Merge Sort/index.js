// Step 1: Split array into halves then recursively merge
const mergeSort = arr => {
  if (arr.length === 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

// Step 2: Compare and concatenate!
const merge = (left, right) => {
  const result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
};

module.exports = mergeSort;



 
const mergeSP = arr => {
  // base case
  if (arr.length === 1) return arr;

  //get middle
  const middle = Math.floor(arr.length / 2);
  // get left array
  const left = arr.slice(0, middle);
  // get right array
  const right = arr.slice(middle);
  // return: run merge on sorted left and sorted right arrays
  return merge(mergeSP(left), mergeSP(right));
}

const mergeP = (left, right) => {
  // initialize empty results array
  let result = [];
  // initialize starting points for left and right arrays
  let indexLeft = 0;
  let indexRight = 0;
  // while the count of left/right indices are less than their lengths {
  while (indexLeft < left.length && indexRight < right.length) {
  // if 0th number of left is less than 0th of right, 
    if (left[indexLeft] < right[indexRight]) {
      // push the left number into the results array
      result.push(left[indexLeft]);
      // increment the left index
      indexLeft++;
    } else {
      // push the right number into the results array
      result.push(righ[indexRight]);
      // increment the right index
      indexRight++;
    }
  }
    // return the concatenated results array with the left and right slices.
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(mergeSP(arrayRandom));