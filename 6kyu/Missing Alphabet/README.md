#MISSING ALPHABET
In this Kata you have to create a function,named insertMissingLetters,that takes in a string and outputs the same string processed in a particular way.

The function should insert only after the first occurence of each character of the input string, all the alphabet letters that:

-are NOT in the original string
-come after the letter of the string you are processing

Each added letter should be in uppercase, the letters of the original string will always be in lowercase.

Example:

input: "holly"

missing letters: "a,b,c,d,e,f,g,i,j,k,m,n,p,q,r,s,t,u,v,w,x,z"

output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"

``` javascript
function insertMissingLetters(str){
  const alpha = [...'abcdefghijklmnopqrstuvwxyz'];
  const missingLetters = [];
  const output = [];
  const occurences = {};
  
  //generate missingLetters
  for(let i = 0; i < alpha.length; i++){
    const alphaLetter = alpha[i];
    if(str.indexOf(alphaLetter) === -1){
      missingLetters.push(alphaLetter);
    } else {
      missingLetters.push('');
    }
  }
  //merge
  for(let j = 0; j < str.length; j++){
    const strLetter = str[j];
    const position = alpha.indexOf(strLetter);
    if(occurences[strLetter]){
     occurences[strLetter] += 1;
      output.push(strLetter);
    } else {
      occurences[strLetter] = 1;
      output.push(strLetter.concat(missingLetters.slice(position).join('').toUpperCase()));
    }
  }
  return output.join('');
}
```
