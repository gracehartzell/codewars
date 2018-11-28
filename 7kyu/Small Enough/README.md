# [Small enough? - Beginner](https://www.codewars.com/kata/small-enough-beginner/train/javascript)
You will be given an `array` and a `limit` value. You must check that all values in the array are below or equal to 
the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

**SOLUTION:**
```js
function smallEnough(array, limit){
    return array.every(x => x <= limit)
}
```
**Notes:** 
* So for this one, I didn't entirely understand what all of the components would be until I read the tests.
Mainly, for some reason I thought that the array would be an array of strings and not numbers. 
* I had some difficulty with this one initially but then remembered the `Array.prototype.every()` method. 
This method tests whether all elements in the array pass the test provided by the callback function. If any 
of them fail, then it returns false. The method does, however, return true for any condition put on an empty array.
