function whoIsNext(names, r){
  // make array of new queue
  let newQueue = [];
  names.map(name => newQueue.push(name[names-1]))
  console.log(newQueue);
}




console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)) // Sheldon
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)) // Penny
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)) // Leonard

