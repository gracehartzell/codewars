# Array Methods

An area for rebuilding common array methods in order to best understand them.

## Definitions:

- `every()` - tests whether all elements in an array pass the test implemented
  by the provided function.
  - Syntax: `arr.every(callback[index, array, thisArg])`
    - `index`: (optional) index of the current element being processed in the array.
    - `array`: (optional) array method was called upon.
    - `thisArg`: (optional) value to use as `this` when executing the callback.
  - Returns:
  - Edges: returns `true` for any condition put on an empty array
- `filter()` - Creates a **new** array with each of the elements that pass the test
  implemented by the provided function.
  - Syntax: `arr.filter(callback(element[, index[, array]])[,thisArg])`
    - `callback`: Predicate to test each element of the array. Returns a boolean for
      element. Accepts three arguments:
    - `element`: current element being processed in the array
    - `index`: (optional) index of the current element (being processed)
    - `array`: (optional) the particular array that the `filter` method was called upon
    - `thisArg`: (optional) placing the pronoun in the sentence. (i.e. value to use as
      `this` when executing `callback`)
- `flat()` - Creates a new array with all sub-arrays concatenated into it
  recursively up to a specified depth. Syntax: `arr.flat([depth])`.
- `forEach()`
  - Syntax:
- `Array.from`()
  - Syntax:
- `map()`
  - Syntax:
- `reduce()`
  - Syntax:
- `some()`
  - Syntax:
- `sort()`
  - Syntax:
