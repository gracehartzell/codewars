function isPangram(string) {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let lowerCaseString = string.toLowerCase();
  for (let i = 0; i < letters.length; i++) {
      if (lowerCaseString.indexOf(letters[i]) === -1) {
          return false;
      }
  }
  return true;
} 


console.log(isPangram('The quick brown fox jumps over the lazy dog.') === true);
console.log(isPangram('This is not a pangram.') === false);