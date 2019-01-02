const countDeafRats = (town) => {
  let deafRats = 0;
  let input = town.split("P").filter(val => val !== " ").join('').split(' ')

  return ` TOWN: ${input}`;
}



console.log(countDeafRats("~O~O~O~O P"));
console.log(countDeafRats("P O~ O~ ~O O~"));
console.log(countDeafRats("~O~O~O~OP~O~OO~"));


console.log(countDeafRats("~O~O~O~O P") === 0);
console.log(countDeafRats("P O~ O~ ~O O~") === 1);
console.log(countDeafRats("~O~O~O~OP~O~OO~") === 2);

// Justin's: split, reverse, join
// remove spaces 