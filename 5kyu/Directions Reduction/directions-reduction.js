function dirReduc(arr) {
  let str = arr.join('');
  const pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/; 
  while (pattern.test(str)) {
   str = str.replace(pattern,'');
  };
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || []; 
 }


console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // ["WEST"]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])) // ["NORTH", "WEST", "SOUTH", "EAST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); // []

/*
NOTES:
• RegExpObject.test(string): The test method tests for a match in a given string which is why we're 
using it on the specified regex pattern and testing it on the string. 
  • We need to go through the string and while the pattern  
• In the return statement, need to add the `|| []` in case all of the directions cancel each other
 out otherwise will return null 
• Simply returning str gives you just the words (i.e. the second console.log would return `NORTHWESTSOUTHEAST`)
*/

