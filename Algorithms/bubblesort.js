const bubbleSort1 = nums => {  
  let swapped;
  do {
    swapped = false;
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i+1]) {
        var temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
  } while(swapped);
  return nums;
};

// ALTERNATE METHODS:

const bubbleSort2 = arr => {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i-1] > arr[i]) {
        done = false;
        [arr[i-1], arr[i]] = [arr[i], arr[i-1]]
      }
    }
  }
  return arr;
}

const bubbleSort3 = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]) {
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
      return bubbleSort1(arr)
    }
  }
}


console.log(bubbleSort1([5, 7, 6, 4]));
console.log(bubbleSort2([5, 7, 6, 4]));
console.log(bubbleSort3([5, 7, 6, 4]));

