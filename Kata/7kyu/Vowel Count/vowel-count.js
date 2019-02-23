// first try (30/7/2018): 
function getCount(str) {
    var vowelsCount = 0;
    for (var i = 0; i < str.length; i++) {
        if ((str[i] === "a") || (str[i] === "e") || (str[i] === "i") || (str[i] === "o") || (str[i] === "u")) {
            vowelsCount += 1
        }
    }
    return vowelsCount;
}
// more straightforward:
function getCount2(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }


  console.log(getCount2('cookie'));
