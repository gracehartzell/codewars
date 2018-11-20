function bump(x) {
  let xCount = 0;
  let letter = x.indexOf('n');

  while ( letter !== -1) {
      xCount++
      letter = x.indexOf('n', letter + 1);
  }

  if (xCount > 15) {
      return "Car Dead"
  }
  else {
      return "Woohoo!"
  }
}

console.log(bump("nnnnnnnnnnnnnnnnnnnnnnn"));

