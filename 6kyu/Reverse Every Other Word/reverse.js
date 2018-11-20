function reverseStr(str) {
  // turn string into array
  let array = str.split(' ');
  // get all odd words and reverse them
  const mapFuncCb = (item, index) => {
    if (!(index % 2)) {
      return item;
    }
    else {
      // console.log(item);
      return item.split('').reverse().join('');
    }
  }
  // let mappedArray = array.map(mapFuncCb);
  return array.map(mapFuncCb).join(' ');
};


// ALT:
function reverse(str){
  return revStr = str.split(" ").map((el, index) => {
    return index % 2 !== 0 ? 
           el.split("").reverse().join("") : 
           el;
  }).join(" ");
};


  console.log(reverseStr(" ") === " ");
  console.log(reverseStr("I really don't like reversing strings!") === "I yllaer don't ekil reversing !sgnirts");
