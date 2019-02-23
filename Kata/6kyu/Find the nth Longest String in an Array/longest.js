function longest(arr, n) {
  let preservedOriginal = arr.slice(0);
  console.log('unsorted', preservedOriginal);
  
  //descending by length
  preservedOriginal.sort((a,b)=>{
      return b.length - a.length || arr.indexOf(a) - arr.indexOf(b);
  });
  console.log('sorted!', preservedOriginal);

  return preservedOriginal[n-1];
}

// Cleaned:
function longest(arr, n) {
  let preservedOriginal = arr.slice(0);
  preservedOriginal.sort((a,b)=>{
      return b.length - a.length || arr.indexOf(a) - arr.indexOf(b);
  });
  return preservedOriginal[n-1];
}

console.log(longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k','l'], 1) === 'a'); 
console.log(longest(['aa', 'bb', 'cc', 'dd', 'eee', 'b', 'f', 'ff', 'hhh', 'gggg'],4) === 'aa')
console.log(longest(['Hello','World','Codewars','Katas'],4) === 'Katas');


