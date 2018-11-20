function hasUniqueChars(str){
    
  for(let i=0; i < str.length; i++){
      let temp = str[i];

      for(let j = i+1; j <= str.length - 1; j++) {
          if (temp === str[j]) {
              return false;
          }
      };  
  };            
  return true;
};


// TESTS
console.log(hasUniqueChars('  nAa') === false);
console.log(hasUniqueChars('abcdef') === true);
console.log(hasUniqueChars('++-') === false);

