# [Convert String to Camel Case](https://www.codewars.com/kata/convert-string-to-camel-case)

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples
```js
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
```

------------------------------------------------------------------------------
## SOLUTION
```js
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, lower) => lower.toUpperCase());
}
```

### NOTES:
* First step: 
  * **Removing the underscores and hyphens**
  * Difficulty: v0 (as in bouldering, v0 denotes the easiest level of a climb)
  * Steps: use replace globally on hyphens and underscores with empty spaces (e.g., '')
* Second step: 
  * Take care of extra case in which the new word is lowercase
  * Difficulty: v4-v6 (required extra learning on my part while still being doable)
  * Steps: I knew I needed a function to isolate just the second case while still retaining the correct 
    removal of hyphens and underscores. This required some Googling on my part and I ended up stumbling
    upon the case of omitting the first parameter in a function and gave that a try. Turns out, that 
    works for isolating just that second remaining capturing group (as stated in the (.) of the regex
    pattern). I was then able to apply the toUpperCase() on the second parameter.
