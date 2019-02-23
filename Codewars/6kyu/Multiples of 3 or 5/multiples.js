function solution(number) {
  let intArray = [];

  for (i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
          intArray.push(i);
      }
      console.log(intArray)
  }
  return intArray.reduce((a,b) => a + b, 0)
}


function solution(number) {
  let intArray = 0;

  for (i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
          intArray += i;
      }
  }
  return intArray;
}

console.log(solution(10)); 