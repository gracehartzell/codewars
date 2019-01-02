/*
 * @param {number[]} height
 *  @return {number}
 */
// passed test cases but not on website: 
const maxArea = (height) => {
  let container = [];
  let max;
  for (let i = 0; i < height.length-1; i++) {
    if (height[i] <= height[i + 1]) {
      container.push(height[i + 1]);
      if (container[0] > container[container.lengh-1]) {
        max = container[0]
      }
      else {
        max = container[container.length-1]
      }
    }
  }
  return max * container[container.length-1];    
};

// passing on website: 
const maxArea2 = (input) => {
  let max = 0;
    for (let i = 0; i < input.length-1; i++) {
        for (let e = i + 1; e < input.length; e++) {
            width = e - i;
            height = Math.min(input[e], input[i])
            volume = width * height;
            if (volume > max) {
                max = volume
            }
        }
    }
    return max;
};

const maxArea3 = height => {
    
}

console.log(maxArea([1,1])) // 1
console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49

console.log(maxArea2([1,8,6,2,5,4,8,3,7])) // 49
console.log(maxArea2([1,1])) // 1




