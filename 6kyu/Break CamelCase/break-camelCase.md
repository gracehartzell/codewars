# [Break CamelCase](https://www.codewars.com/kata/5208f99aee097e6552000148)
Complete the solution so that the function will break up camel casing, using a space between words.

Example
```js
solution('camelCasing') // => should return 'camel Casing'
```

### SOLUTION
```js
function solution(string) {
  return `${string}`.split(/(?=[A-Z])/).join(' ');
}
```