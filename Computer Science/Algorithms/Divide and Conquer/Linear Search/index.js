function linearSearch(list, item) {
  let index = -1;                                         // -1 means not found
  list.forEach((listItem, i) => {
    if (listItem === item) {
      index = i;                                          // update index to current index (i)
    }
  });
  return index;
}

console.log(linearSearch([2, 6, 7, 90, 103], 90)); // 3


/*
Things to consider: 
  1. Do you have multiples of a number? If so, which do you want?
*/