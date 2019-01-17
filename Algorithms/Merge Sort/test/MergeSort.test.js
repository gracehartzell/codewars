const expect = require("chai").expect;
const mergeSort = require("../index.js");

describe("Merge Sort", () => {
  it("sorts an array of positive numbers", function() {
    expect(mergeSort([9.6, 3, 1, 2.6, 5])).to.eql([1, 2.6, 3, 5, 9.6]);
  });

  it("sorts an array of negative numbers", function() {
    expect(mergeSort([-2, -6, -8, -86, -2, -0.15])).to.eql([-86, -8, -6, -2, -2, -0.15]);
  });

  it("sorts an array of positive and negative numbers", function() {
    expect(mergeSort([-3, 4, 1, -9, 22])).to.eql([-9, -3, 1, 4, 22]);
  });

  it("works with arrays that are already sorted", function() {
    expect(mergeSort([2, 3, 5, 7, 11, 13, 17])).to.eql([2, 3, 5, 7, 11, 13, 17]);
  });
});
