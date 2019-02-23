function removeDuplicateWords(str) {
  let strArray = str.split(' ');
  let array = []
  // loop through and check for duplicates
  for (let i = 0; i < strArray.length; i++) {
      if(array.indexOf(strArray[i]) === -1) {
          array.push(strArray[i])
      }
  }
  return array.join(' ');
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta'));

