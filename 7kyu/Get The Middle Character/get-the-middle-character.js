// first try (31/7/2018)
function getMiddle(str) {
  let position; // position of middle
  let length; // length of returned string

  if (str.length % 2 === 1) {
      position = str.length / 2;
      length = 1;
  }
  else {
     position = str.length / 2 - 1;
     length = 2;
  }
  return str.substring(position, position + length);
}

// console.log(getMiddle('testing'));
