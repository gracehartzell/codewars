/***************************************************
 *************** DIRECTIONS REDUCTION **************
 ***************************************************/

function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/; 
  while (pattern.test(str)) 
   str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[]; 
 }


console.log(dirReduc(['SOUTH', 'NORTH', 'WEST', 'EAST', 'EAST', 'EAST']));

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));

