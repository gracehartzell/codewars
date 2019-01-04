function palindrome(str) {

  const strArr = str.toLowerCase().split('');
  const reversedArr = [];
  for (let i = strArr.length - 1; i >= 0; i--) {
    reversedArr.push(strArr[i]);
  }

  return reversedArr.join('').replace(/\W/gi,'') === str.toLowerCase().replace(/\W/gi,'');
}