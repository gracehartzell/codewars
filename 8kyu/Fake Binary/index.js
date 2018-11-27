function fakeBinary(x){
  return x.replace(/[1234]/gi, '0').replace(/[56789]/gi, '1');
}

console.log(fakeBinary('93829')) //testing returns 10101