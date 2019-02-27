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
    - `callback`
    - `element`
    - `index`: (optional)
    - `array`: (optional)
    - `thisArg`: (optional)
- `flat()` - Creates a new array with all sub-arrays concatenated into it
  recursively up to a specified depth. Syntax: `arr.flat([depth])`.
- `forEach()`
- `Array.from`()
- `map()`
- `reduce()`
- `some()`
- `sort()`
