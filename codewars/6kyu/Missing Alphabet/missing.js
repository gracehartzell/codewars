function insertMissingLetters(str){
  const alpha = [...'abcdefghijklmnopqrstuvwxyz'];
  const missingLetters = [];
  const newStr = [];
  const occurences = {};
  

  for(let i = 0; i < alpha.length; i++){
    const alphaFilled = alpha[i];
    if(str.indexOf(alphaFilled) === -1){
      missingLetters.push(alphaFilled);
    } else {
      missingLetters.push('');
    }
  }

  for(let j = 0; j < str.length; j++){
    const strFilled = str[j];
    const position = alpha.indexOf(strFilled);
    if(occurences[strFilled]){
     occurences[strFilled] += 1;
      newStr.push(strFilled);
    } else {
      occurences[strFilled] = 1;
      newStr.push(strFilled.concat(missingLetters.slice(position).join('').toUpperCase()));
    }
  }
  return newStr.join('');
}