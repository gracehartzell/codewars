function smallEnough(array, limit){
  return array.every(x => x <= limit)
}

console.log(smallEnough([66, 101], 200) === true);
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100) === false);
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107) === true);
