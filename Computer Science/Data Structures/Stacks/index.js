let Stack = function() {
  this.storage = "";
};

Stack.prototype.push = function(val) {
  this.storage = this.storage.concat('***', val);
};

Stack.prototype.pop = function() {
  // slice off last characters up until asterisks (saving value)


};

Stack.prototype.size = function() {

};

let myWeeklyMenu = new Stack();
myWeeklyMenu.push('Hot Pockets');

console.log(myWeeklyMenu);
