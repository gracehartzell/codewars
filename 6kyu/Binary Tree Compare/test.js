// import { compare } from '.'

// Test.describe("example test", function() {
//   var aNode = {val: 1, left: null, right: null};
//   var bNode = {val: 1, left: null, right: null};
//   var cNode = {val: 2, left: null, right: null};
  
//   var results1 = compare(aNode, bNode);
//   Test.it("Should return true for equal nodes", function() {
//     Test.assertEquals(results1, true, "should return true");
//   });
  
//   var results2 = compare(aNode, cNode);
//   Test.it("Should return fale for non-equal nodes", function() {
//     Test.assertEquals(results2, false, "should return false");
//   });
// });
import { toCamelCase } from '.'

test('Convert string to camel case', () => {
  expect(toCamelCase('the-stealth-warrior')).toBe('theStealthWarrior')
})

test('Convert string to camel case', () => {
  expect(toCamelCase('The_Stealth_Warrior')).toBe('TheStealthWarrior')
})

test('Convert string to camel case', () => {
  expect(toCamelCase('the_stealth_warrior')).toBe('theStealthWarrior')
})

test('Convert string to camel case', () => {
  expect(toCamelCase('A-B-C')).toBe('ABC')
})

test('Convert string to camel case', () => {
  expect(toCamelCase('')).toBe('')
})